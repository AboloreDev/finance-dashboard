import { DashboardBox } from "../../components/Navbar/DashboardBox";
import { useGetProductsQuery } from "../../redux/api";

const SecondRow = () => {
  // DATA
  const { data } = useGetProductsQuery();
  console.log(data);
  return (
    <>
      {" "}
      <DashboardBox gridArea="d"></DashboardBox>
      <DashboardBox gridArea="e"></DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>
    </>
  );
};

export default SecondRow;
