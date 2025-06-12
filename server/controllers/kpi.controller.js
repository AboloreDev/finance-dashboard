import KPI from "../models/kpi.js";

export const getAllKpis = async (req, res) => {
  try {
    const kpisData = await KPI.find();
    return res
      .status(200)
      .json({ success: true, message: "KPI Fetched Successfully!", kpisData });
  } catch (error) {
    console.error(error);
    res.status(500).json("Server Error");
  }
};
