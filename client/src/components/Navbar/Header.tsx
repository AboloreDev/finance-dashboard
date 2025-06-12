type Props = {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  sideText?: string;
};

const Header = ({ icon, title, subtitle, sideText }: Props) => {
  return (
    <div className="w-full flex justify-between items-center p-1 mb-1">
      <div className="flex justify-between items-center">
        {icon}
        <div className=" text-white ">
          <h2 className="font-bold">{title}</h2>
          <h5 className="text-slate-400">{subtitle}</h5>
        </div>
      </div>
      <h5 className="font-semibold text-yellow-500">{sideText}</h5>
    </div>
  );
};

export default Header;
