import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      success: true,
      message: "Products Fetched Successfully!",
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json("Server Error");
  }
};
