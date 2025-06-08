import { DashboardBox } from "../../components/Navbar/DashboardBox";

type Props = {};

const ThirdRow = (props: Props) => {
  return (
    <>
      {" "}
      <DashboardBox gridArea="g"></DashboardBox>
      <DashboardBox gridArea="h"></DashboardBox>
      <DashboardBox gridArea="i"></DashboardBox>
      <DashboardBox gridArea="j"></DashboardBox>
    </>
  );
};

export default ThirdRow;
