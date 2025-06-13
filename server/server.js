import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import kpiRoutes from "./routes/kpiRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// configurations
dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello");
});

// connectDb
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use("/api/kpis", kpiRoutes);
app.use("/api/products", productRoutes);
app.use("/api/transactions", transactionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
