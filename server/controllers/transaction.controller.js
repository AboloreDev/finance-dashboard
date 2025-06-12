import Transaction from "../models/Transaction.js";

export const getAllTransactions = async (req, res) => {
  try {
    const transaction = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });
    return res.status(200).json({
      success: true,
      message: "transaction Fetched Successfully!",
      transaction,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json("Server Error");
  }
};
