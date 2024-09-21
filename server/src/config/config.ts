import dotenv from "dotenv";

dotenv.config();

export const config = {
  polygonApiKey: process.env.POLYGON_API_KEY || "",
  baseUrl: "https://api.polygon.io",
};
