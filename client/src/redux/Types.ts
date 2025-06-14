export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Month {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

export interface Day {
  id: string;
  date: string;
  revenue: string;
  expenses: number;
}

export interface GetKpisResponse {
  kpisData: Array<{
    id: string;
    _id: string;
    __v: number;
    totalProfit: number;
    totalRevenue: number;
    totalExpenses: number;
    expensesByCategory: ExpensesByCategory;
    monthlyData: Array<Month>;
    dailyData: Array<Day>;
    createdAt: string;
    updatedAt: string;
  }>;
}

export interface getProductResponse {
  products: Array<{
    id: string;
    _id: string;
    __v: number;
    expense: number;
    price: number;
    transactions: Array<string>;
    createdAt: string;
    updatedAt: string;
  }>;
}
export interface getTransactionResponse {
  transaction: Array<{
    id: string;
    _id: string;
    __v: number;
    amount: number;
    buyer: number;
    productIds: Array<string>;
    createdAt: string;
    updatedAt: string;
  }>;
}
