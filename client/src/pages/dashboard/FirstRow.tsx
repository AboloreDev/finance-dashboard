import { DashboardBox } from "../../components/Navbar/DashboardBox";
import { useGetKpisQuery } from "../../redux/api";

type Props = {};

const FirstRow = (props: Props) => {
  const { data } = useGetKpisQuery();
  return (
    <>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
    </>
  );
};

export default FirstRow;
