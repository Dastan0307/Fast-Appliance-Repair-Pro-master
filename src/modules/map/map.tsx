"use client";

import { useState, useRef, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./map.module.scss";
import PinIcon from "@assets/icons/PinIcon.svg";
import { Typography } from "@typography/typography";
import { getMapData } from "./model/mapModel";
import useMediaQuery from "@utils/hooks/useMediaQuery";

function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

interface Review {
  author_name: string;
  rating: number;
  text: string;
  author_url?: string;
}

interface PlaceDetails {
  name: string;
  longitude: number;
  latitude: number;
  place_id?: string;
  reviews?: Review[];
}

const pointClassNames = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
];

const containerStyle = {
  width: "100%",
  height: "500px",
};

const MapBlock = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<PlaceDetails | null>(null);
  const [data, setData] = useState<PlaceDetails[]>([]);
  const mapRef = useRef<google.maps.Map | null>(null);
  const isMobile = useMediaQuery("(max-width: 430px)");

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
  });

  const getData = async () => {
    try {
      const res = await getMapData();
      const randomSubset: PlaceDetails[] = getRandomItems(res, 11);
      setData(randomSubset);
    } catch (err) {
      console.error("Error fetching place details", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSelect = async (index: number) => {
    setSelected(index);
    const location = data[index];

    if (mapRef.current) {
      mapRef.current.panTo({ lat: location.latitude, lng: location.longitude });
    }

    try {
      const res = await fetch(
        `/api/place-details?placeId=${location.place_id}&fields=name,formatted_address,geometry,reviews`
      );
      const data = await res.json();
      setSelectedPlace({
        name: data.result?.name || location.name,
        longitude: location.longitude,
        latitude: location.latitude,
        place_id: location.place_id,
        reviews: data.reviews || [],
      });
    } catch (err) {
      console.error("Error fetching place details", err);
      setSelectedPlace({
        ...location,
        reviews: [],
      });
    }
  };

  const getCustomIcon = () => {
    if (isLoaded && window?.google?.maps) {
      return {
        url: PinIcon.src,
        scaledSize: new window.google.maps.Size(40, 40),
      };
    }
    return undefined;
  };

  if (!isLoaded || data.length === 0) return null;
  return (
    <section className={classes.repairBlock}>
      <MultiContainer>
        <Typography variant="h1" weight="bold">
          Repair of household appliances in{" "}
          <Typography variant="span">your city</Typography>
        </Typography>
        <div className={classes.repairContent}>
          <div className={classes.mapSidebar}>
            {data.map((loc, index) => (
              <div
                key={index}
                className={`${classes.sidebarPoint} ${
                  classes[pointClassNames[index]]
                } ${selected === index ? classes.active : ""}`}
                onClick={() => handleSelect(index)}
              >
                <div>
                  <Typography variant="span" weight="regular" truncate={15}>
                    {loc.name}
                  </Typography>
                </div>
                <div className={classes.sidebarPointLine}></div>
              </div>
            ))}
          </div>

          <div
            className={classes.mapBlock}
            style={{
              flex: 1,
              maxWidth: isMobile ? "100%" : "600",
              borderRadius: 10,
            }}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={
                data.length > 0 &&
                Number.isFinite(data[selected ?? 0]?.latitude) &&
                Number.isFinite(data[selected ?? 0]?.longitude)
                  ? {
                      lat: Number(data[selected ?? 0].latitude),
                      lng: Number(data[selected ?? 0].longitude),
                    }
                  : { lat: 43.65, lng: -79.38 }
              }
              zoom={12}
              onLoad={(map) => {
                mapRef.current = map;
              }}
            >
              {data.map((location, index) => (
                <Marker
                  key={index}
                  position={{
                    lat: location.latitude,
                    lng: location.longitude,
                  }}
                  onClick={() => handleSelect(index)}
                  icon={getCustomIcon()}
                />
              ))}

              {selected !== null && data[selected] && selectedPlace && (
                <InfoWindow
                  position={{
                    lat: Number(selectedPlace.latitude) || 43.65,
                    lng: Number(selectedPlace.longitude) || -79.38,
                  }}
                  onCloseClick={() => {
                    setSelected(null);
                    setSelectedPlace(null);
                  }}
                >
                  <div className={classes.infoWindow}>
                    <h3 className={classes.infoWindowTitle}>
                      {selectedPlace.name}
                    </h3>
                    {selectedPlace.reviews &&
                    selectedPlace.reviews.length > 0 ? (
                      <ul className={classes.reviewsList}>
                        {selectedPlace.reviews
                          .slice(0, 3)
                          .map((review, index) => (
                            <li key={index} className={classes.reviewItem}>
                              <div className={classes.reviewAuthor}>
                                <a
                                  href={review.author_url || "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {review.author_name}
                                </a>
                              </div>
                              <div className={classes.reviewRating}>
                                Rating: {review.rating} stars
                              </div>
                              <p className={classes.reviewText}>
                                {review.text}
                              </p>
                            </li>
                          ))}
                      </ul>
                    ) : (
                      <p className={classes.noReviews}>No reviews available.</p>
                    )}
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </div>
        </div>
      </MultiContainer>
    </section>
  );
};

export default MapBlock;
