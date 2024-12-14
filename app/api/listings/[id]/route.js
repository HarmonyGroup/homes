import { mongooseConnect } from "@/lib/mongoose";
import { Listings } from "@/models/Listing";

export const GET = async (req, { params }) => {
  try {
    await mongooseConnect();
    const { id } = params;

    const listingDoc = await Listings.findById(id);
    if (!listingDoc) {
      return new Response(JSON.stringify({ error: "Listing not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(listingDoc), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};
