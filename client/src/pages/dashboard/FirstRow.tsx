/* eslint-disable */
import { useMemo } from "react";
import { DashboardBox } from "../../components/Navbar/DashboardBox";
import { useGetKpisQuery } from "../../redux/api";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  Line,
  CartesianGrid,
  Legend,
  LineChart,
  BarChart,
  Bar,
  Rectangle,
} from "recharts";
import Header from "../../components/Navbar/Header";

const FirstRow = () => {
  const { data } = useGetKpisQuery();
  const revenueExpenses = useMemo(() => {
    return (
      data &&
      // @ts-ignore
      data.kpisData[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        };
      })
    );
  }, [data]);

  const revenueProfits = useMemo(() => {
    return (
      data &&
      // @ts-ignore
      data.kpisData[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          profit: (revenue - expenses).toFixed(2),
        };
      })
    );
  }, [data]);

  const revenue = useMemo(() => {
    return (
      data &&
      // @ts-ignore
      data.kpisData[0].monthlyData.map(({ month, revenue }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
        };
      })
    );
  }, [data]);

  return (
    <>
      {/* Row 1 box 1 */}
      <DashboardBox className="p-2" gridArea="a">
        <Header
          title="Revenue and Expenses"
          subtitle="Top line represents revenue, and the bottom line represents expenses"
          sideText="+5%"
        />
        <ResponsiveContainer>
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 10,
              right: 20,
              left: -10,
              bottom: 40,
            }}
          >
            <defs>
              <linearGradient x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={"#221f40"} stopOpacity={0.5} />
                <stop offset="95%" stopColor={"#221f40"} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#171524" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#171524" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" tickLine={false} />
            <YAxis
              tickLine={false}
              domain={[8000, 23000]}
              axisLine={{ strokeWidth: "0" }}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              dot={true}
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={1}
            />
            <Area
              type="monotone"
              dataKey="expenses"
              dot={true}
              stackId="1"
              stroke="#5a579d"
              fill="#5a579d"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>

      {/* ROw 1 box 2 */}
      <DashboardBox className="p-2" gridArea="b">
        <Header
          title="Profit and Revenue"
          subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={400}
            data={revenueProfits}
            margin={{
              top: 30,
              right: 25,
              left: -10,
              bottom: 30,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="name" tickLine={false} />
            <YAxis yAxisId="left" tickLine={false} axisLine={false} />
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
              dataKey="profit"
              dot={true}
              stroke="#8884d8"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              dot={true}
              stroke="#5a579d"
              fill="#5a579d"
              fillOpacity={1}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>

      {/* Row 1 box 3 */}
      <DashboardBox gridArea="c">
        <Header
          title="Revenue Month by Month"
          subtitle="Graph representing monthly revenue"
          sideText="+9%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar
              dataKey="revenue"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default FirstRow;
