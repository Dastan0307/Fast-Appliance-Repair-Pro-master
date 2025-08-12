export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const placeId = searchParams.get("placeId");

  if (!placeId) {
    return new Response(JSON.stringify({ error: "Missing placeId" }), {
      status: 400,
    });
  }

  const fields = "name,rating,formatted_address,reviews";
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      return new Response(
        JSON.stringify({
          error: "Failed to fetch place details",
          details: data,
        }),
        {
          status: 500,
        }
      );
    }

    return new Response(JSON.stringify(data.result), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Server error", details: String(error) }),
      {
        status: 500,
      }
    );
  }
}
