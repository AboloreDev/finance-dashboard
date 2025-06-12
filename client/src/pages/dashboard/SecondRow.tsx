import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { DashboardBox } from "../../components/Navbar/DashboardBox";
import Header from "../../components/Navbar/Header";
import { useGetKpisQuery, useGetProductsQuery } from "../../redux/api";
import { useMemo } from "react";

const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];

const SecondRow = () => {
  // DATA
  const { data: productsData } = useGetProductsQuery();
  const { data: operationalData } = useGetKpisQuery();
  console.log(productsData);
  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData.kpisData[0].monthlyData.map(
        ({ operationalExpenses, nonOperationalExpenses, month }) => {
          return {
            name: month.substring(0, 3),
            operationalExpenses: operationalExpenses,
            nonOperationalExpenses: nonOperationalExpenses,
          };
        }
      )
    );
  }, [operationalData]);

  const priceVsExpenses = useMemo(() => {
    return (
      productsData &&
      productsData.products.map(({ _id, price, expense }) => {
        return {
          _id: _id,
          price: price,
          expense: expense,
        };
      })
    );
  }, [productsData]);

  const pieColors = ["#8884d8", "#5250ae"];
  return (
    <>
      {" "}
      <DashboardBox className="p-2" gridArea="d">
        <Header
          title="Operational vs Non-Operational Expenses"
          sideText="+4%"
        />
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={400}
            data={operationalExpenses}
            margin={{
              top: 30,
              right: 25,
              left: -10,
              bottom: 30,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="name" tickLine={false} />
            <YAxis
              orientation="left"
              yAxisId="left"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
            />
            <Tooltip />
            <Legend
              height={20}
              wrapperStyle={{
                margin: "0 0 10px 0",
              }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="nonOperationalExpenses"
              dot={true}
              stroke="#8884d8"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="operationalExpenses"
              dot={true}
              stroke="#5a579d"
              fill="#5a579d"
              fillOpacity={1}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="e">
        <Header title="Campaigns and Target" sideText="+4%" />
        <div className="flex justify-between w-full px-3 items-center">
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
              data={pieData}
              innerRadius={16}
              outerRadius={36}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={pieColors[index % pieColors.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="text-center text-slate-400">
            <h5 className="font-bold">Target Sales</h5>
            <h3 className="text-amber-400">83</h3>
            <h6>Financial desired goals</h6>
          </div>

          <div className="text-center text-slate-400 flex flex-col space-y-1">
            <div>
              <h5 className="font-bold">Revenue Profit</h5>
              <h6>Profit are 25% up</h6>
            </div>
            <div>
              <h5 className="font-bold">Revenue Losses</h5>
              <h6>Losses are 25% down</h6>
            </div>
          </div>
        </div>
      </DashboardBox>
      <DashboardBox gridArea="f">
        <Header title="Product Price vs Expenses" sideText="+20%" />
        <ResponsiveContainer>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            {/* <CartesianGrid /> */}
            <XAxis
              type="number"
              dataKey="price"
              name="price"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis
              type="number"
              dataKey="expense"
              name="expense"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <ZAxis type="number" range={[20]} />
            <Tooltip formatter={(v) => `$${v}`} />
            <Scatter
              name="Product Expense Ratio"
              data={priceVsExpenses}
              fill="#8884d8"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default SecondRow;
