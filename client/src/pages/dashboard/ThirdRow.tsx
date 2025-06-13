import { DashboardBox } from "../../components/Navbar/DashboardBox";
import { DataGrid, type GridCellParams } from "@mui/x-data-grid";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "../../redux/api";
import Header from "../../components/Navbar/Header";
import { useMemo } from "react";
import { Box, Tooltip } from "@mui/material";
import { Cell, Pie, PieChart } from "recharts";

const ThirdRow = () => {
  const { data: kpiData } = useGetKpisQuery();
  const { data: transactionData } = useGetTransactionsQuery();
  const { data: productData } = useGetProductsQuery();

  const pieChartData = useMemo(() => {
    if (kpiData) {
      const totalExpenses = kpiData.kpisData[0].totalExpenses;
      return Object.entries(kpiData.kpisData[0].expensesByCategory)
        .filter(([key]) => key !== "$*") // Exclude the `$*` entry
        .map(([key, value]) => {
          return [
            { name: key, value: value },
            {
              name: `${key} of Total`,
              value: totalExpenses - (value as number),
            },
          ];
        });
    }
  }, [kpiData]);

  const products = useMemo(() => {
    return (
      productData &&
      productData.products.map(({ _id, expense, price }) => {
        return {
          id: _id,
          expense: expense,
          price: price,
        };
      })
    );
  }, [productData]);

  const transactions = useMemo(() => {
    return (
      transactionData &&
      transactionData.transaction.map(({ _id, amount, buyer, productIds }) => {
        return {
          id: _id,
          amount: amount,
          buyer: buyer,
          productIds: productIds,
        };
      })
    );
  }, [transactionData]);

  const productColumns = [
    { field: "id", headerName: "id", flex: 1 },
    {
      field: "expense",
      headerName: "expense",
      renderCell: (params: GridCellParams) => `$${params.value}`,
      flex: 0.5,
    },
    {
      field: "price",
      headerName: "price",
      renderCell: (params: GridCellParams) => `$${params.value}`,
      flex: 0.5,
    },
  ];
  const transactionColunns = [
    { field: "id", headerName: "id", flex: 1 },
    {
      field: "amount",
      headerName: "amount",
      renderCell: (params: GridCellParams) => `$${params.value}`,
      flex: 0.7,
    },
    {
      field: "buyer",
      headerName: "buyer",
      renderCell: (params: GridCellParams) => `${params.value}`,
      flex: 0.6,
    },
    {
      field: "productIds",
      headerName: "count",
      renderCell: (params: GridCellParams) =>
        (params.value as Array<string>).length,
      flex: 0.4,
    },
  ];

  const pieColors = ["#8884d8", "#5250ae"];
  return (
    <>
      {" "}
      <DashboardBox gridArea="g" className="p-1">
        <Header
          title="List of products"
          sideText={`${productData?.products.length} products`}
        />
        <Box
          p=" 0 0.5rem"
          height="80%"
          width="100%"
          sx={{
            "& .MuiDataGrid-root": {
              color: "#f4f4f4",
              border: "none",
              backgroundColor: "transparent",
            },
            "& .MuiDataGrid-cell": {
              color: "#f4f4f4",
              backgroundColor: "transparent",
            },
          }}
        >
          <div className="h-62 rounded-md w-full">
            <DataGrid
              columnHeaderHeight={30}
              rowHeight={30}
              rows={products || []}
              columns={productColumns}
            />
          </div>
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="h">
        <Header
          title="Recent Orders"
          sideText={`${transactionData?.transaction.length} recent transactions`}
        />
        <Box
          mt="0rem"
          p=" 0 0.5rem"
          height="100%"
          width="100%"
          sx={{
            "& .MuiDataGrid-root": {
              color: "#f4f4f4",
              border: "none",
              backgroundColor: "transparent",
            },
            "& .MuiDataGrid-cell": {
              color: "#f4f4f4",
              backgroundColor: "transparent",
            },
          }}
        >
          <div className="h-96 rounded-md w-full">
            <DataGrid
              columnHeaderHeight={30}
              rowHeight={30}
              rows={transactions || []}
              columns={transactionColunns}
            />
          </div>
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="i">
        <Header title="Expense Breakdown by Category" sideText="+4" />
        <div className="flex justify-between w-full px-3 items-center">
          {pieChartData?.map((data, i) => (
            <div key={`${data[0].name}-${i}`}>
              <PieChart
                width={120}
                height={110}
                margin={{
                  top: 30,
                  right: 5,
                  left: 10,
                  bottom: 30,
                }}
              >
                <Pie
                  stroke="none"
                  data={data}
                  innerRadius={16}
                  outerRadius={36}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={pieColors[index % pieColors.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
              <h1 className="text-center text-white font-bold">
                {data[0].name}
              </h1>
            </div>
          ))}
        </div>
      </DashboardBox>
      <DashboardBox gridArea="j" className="p-1">
        <Header title="Overall Summary and Explanation Data" sideText="+15%" />
        <div className="h-4 bg-green-800 rounded-xl w-full">
          <div className="h-4 bg-green-500 rounded-xl w-40"></div>
        </div>
        <h5 className="text-white mt-2">
          Orci aliquam enim vel diam. Venenatis euismod id donec mus lorem etiam
          ullamcorper odio sed. Ipsum non sed gravida etiam urna egestas
          molestie volutpat et. Malesuada quis pretium aliquet lacinia ornare
          sed. In volutpat nullam at est id cum pulvinar nunc.
        </h5>
      </DashboardBox>
    </>
  );
};

export default ThirdRow;
