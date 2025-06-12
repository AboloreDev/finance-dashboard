import mongoose from "mongoose";
import KPI from "../models/kpi.js";
import { kpis, products, transactions } from "../data/seeder.js";
import Product from "../models/Product.js";
import Transaction from "../models/Transaction.js";

const connectDb = async () => {
  // Connect to MongoDB Atlas
  console.log("Connecting to Database");
  mongoose.connection.on("connected", () => console.log("Database connected"));
  await mongoose.connect(process.env.MONGODB_URI);

  // await mongoose.connection.db.dropDatabase();
  // KPI.insertMany(kpis);
  // Product.insertMany(products);
  // Transaction.insertMany(transactions);
};

export default connectDb;
