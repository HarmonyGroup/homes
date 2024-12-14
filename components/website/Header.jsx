import { TbSmartHome } from "react-icons/tb";
import { HiOutlinePhone } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="bg-gray-100 px-4 py-4">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* <p className="text-[#3C0C64] text-xs lg:text-sm font-semibold">
          For enquiries call +234 707 179 3075
        </p> */}
        <p className="text-xs font-medium">Looking for more? contact our agents today</p>
        <div className="lg:flex items-center gap-8 hidden">
          <div className="flex items-center gap-2 text-xs font-medium">
            <TbSmartHome size={14} />
            Property Management
          </div>
          <div className="flex items-center gap-2 text-xs font-medium">
            <HiOutlinePhone size={14} />
            08182012345
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
