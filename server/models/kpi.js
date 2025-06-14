import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      required: true,
      get: (value) => value / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      required: true,
      get: (value) => value / 100,
    },
    operationalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      required: true,
      get: (value) => value / 100,
    },
    nonOperationalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      required: true,
      get: (value) => value / 100,
    },
  },
  { toJSON: { getters: true } }
);

const daySchema = new Schema(
  {
    day: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      required: true,
      get: (value) => value / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      required: true,
      get: (value) => value / 100,
    },
  },
  { toJSON: { getters: true } }
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: mongoose.Types.Currency,
      currency: "USD",
      required: true,
      get: (value) => value / 100,
    },
    totalRevenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      required: true,
      get: (value) => value / 100,
    },
    totalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      required: true,
      get: (value) => value / 100,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (value) => value / 100,
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
