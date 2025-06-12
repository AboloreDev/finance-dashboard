import { DashboardBox } from "../../components/Navbar/DashboardBox";
import { DataGrid, type GridCellParams } from "@mui/x-data-grid";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "../../redux/api";
import Header from "../../components/Navbar/Header";
import { useMemo } from "react";
import { Box } from "@mui/material";

const ThirdRow = () => {
  const { data: kpiData } = useGetKpisQuery();
  const { data: transactionData } = useGetTransactionsQuery();
  const { data: productData } = useGetProductsQuery();
  console.log("transactionData:", transactionData);
  console.log("productsData", productData);

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
      <DashboardBox gridArea="i"></DashboardBox>
      <DashboardBox gridArea="j"></DashboardBox>
    </>
  );
};

export default ThirdRow;
