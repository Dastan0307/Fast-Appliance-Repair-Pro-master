"use client";

import { useState, useRef, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./mapService.module.scss";
import PinIcon from "@assets/icons/PinIcon.svg";
import { Typography } from "@typography/typography";
import { getServiceLocations } from "@modules/map/model/mapModel";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  author_url?: string;
}

interface PlaceDetails {
  id: number;
  name: string;
  city: string;
  latitude: number;
  longitude: number;
  place_id?: string;
  created_at: string;
  reviews?: Review[];
}

interface Location {
  id: number;
  name: string;
  province?: string;
  slug: string;
  latitude: number;
  longitude: number;
  place_id?: string | null;
  locations: PlaceDetails[];
  created_at: string;
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

const defaultCenter = { lat: 43.65, lng: -79.38 };

const ServiceLocations = ({ slug }: { slug: string }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<PlaceDetails | null>(null);
  const [data, setData] = useState<Location | null>(null);
  const [initialCenter, setInitialCenter] = useState(defaultCenter);
  const mapRef = useRef<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
  });

  const getData = async () => {
    try {
      const res = await getServiceLocations(slug);
      setData(res);
      if (
        res?.locations[0] &&
        Number.isFinite(res.locations[0].latitude) &&
        Number.isFinite(res.locations[0].longitude)
      ) {
        setInitialCenter({
          lat: res.locations[0].latitude,
          lng: res.locations[0].longitude,
        });
      }
    } catch (err) {
      console.error("Error fetching place details", err);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const handleSelect = async (index: number) => {
    setSelected(index);
    const location = data?.locations[index];

    if (!location) {
      setSelectedPlace(null);
      return;
    }

    if (mapRef.current) {
      mapRef.current.panTo({
        lat: location.latitude,
        lng: location.longitude,
      });
    }

    if (!location.place_id) {
      setSelectedPlace({
        ...location,
        reviews: [] as Review[],
      });
      return;
    }

    try {
      const res = await fetch(
        `/api/place-details?placeId=${location.place_id}&fields=name,formatted_address,geometry,reviews`
      );
      const data = await res.json();

      setSelectedPlace({
        ...location,
        name: data.result?.name || location.name,
        reviews: (data.reviews || []) as Review[],
      });
    } catch (err) {
      console.error("Error fetching place details", err);
      setSelectedPlace({
        ...location,
        reviews: [] as Review[],
      });
    }
  };

  const getCustomIcon = () => {
    if (!isLoaded || !window.google?.maps) {
      return undefined;
    }
    return {
      url: PinIcon.src,
      scaledSize: new window.google.maps.Size(40, 40),
    };
  };

  if (!isLoaded || !data || data.locations.length === 0) return null;

  return (
    <section className={classes.repairBlock}>
      <MultiContainer>
        <Typography variant="h1" weight="bold">
          Repair of household appliances in{" "}
          <Typography variant="span">
            {`${data.name}, ${data.province}` || "your city"}
          </Typography>
        </Typography>
        <div className={classes.repairContent}>
          <div className={classes.mapSidebar}>
            {data.locations.map((place, index) => (
              <div
                key={place.id}
                className={`${classes.sidebarPoint} ${
                  classes[pointClassNames[index % pointClassNames.length]]
                } ${selected === index ? classes.active : ""}`}
                onClick={() => handleSelect(index)}
              >
                <div>
                  <Typography variant="span" weight="regular" truncate={15}>
                    {place.name}
                  </Typography>
                </div>
                <div className={classes.sidebarPointLine}></div>
              </div>
            ))}
          </div>

          <div
            className={classes.mapBlock}
            style={{ flex: 1, maxWidth: 600, borderRadius: 10 }}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={initialCenter}
              zoom={12}
              onLoad={(map) => {
                mapRef.current = map;
              }}
            >
              {data.locations.map((place, index) => (
                <Marker
                  key={place.id}
                  position={{
                    lat: place.latitude,
                    lng: place.longitude,
                  }}
                  onClick={() => handleSelect(index)}
                  icon={getCustomIcon()}
                />
              ))}

              {selected !== null &&
                data.locations[selected] &&
                selectedPlace && (
                  <InfoWindow
                    position={{
                      lat: Number(selectedPlace.latitude) || defaultCenter.lat,
                      lng: Number(selectedPlace.longitude) || defaultCenter.lng,
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
                                  Rating:{" "}
                                  {Array(review.rating).fill("★").join("")}
                                </div>
                                <p className={classes.reviewText}>
                                  {review.text}
                                </p>
                              </li>
                            ))}
                        </ul>
                      ) : (
                        <p className={classes.noReviews}>
                          No reviews available.
                        </p>
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

export default ServiceLocations;
