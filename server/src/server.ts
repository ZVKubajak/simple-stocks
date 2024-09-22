import express from "express";
import cors from "cors";
import stockRoutes from "./routes/stockRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", stockRoutes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
