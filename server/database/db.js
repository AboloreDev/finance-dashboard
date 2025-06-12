import mongoose from "mongoose";
import KPI from "../models/kpi.js";
import { kpis, products } from "../data/seeder.js";
import Product from "../models/Product.js";

const connectDb = async () => {
  // Connect to MongoDB Atlas
  console.log("Connecting to Database");
  mongoose.connection.on("connected", () => console.log("Database connected"));
  await mongoose.connect(process.env.MONGODB_URI);

  // await mongoose.connection.db.dropDatabase();
  // KPI.insertMany(kpis);
  // Product.insertMany(products);
};

export default connectDb;
