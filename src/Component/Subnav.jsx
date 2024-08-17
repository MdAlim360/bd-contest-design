import { FaSearch } from "react-icons/fa";

const Subnav = () => {
  return (
    <div className=" flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center  p-4 gap-4">
      {/* Left Side */}
      {/* <div className="text-lg font-bold">
        Bangladesh National Information Broadcasting
      </div> */}
      {/* Select Dropdown */}
      <select className="bg-white text-gray-800 border-2 border-red-600 rounded-md p-2 -mr-4 md:-mr-4 lg:-mr-0 focus:outline-none focus:ring-2 focus:ring-red-600 w-40">
        <option>Types of office</option>
        <option>Ministry office</option>
        <option>Department broadcasting</option>
        <option>Division broadcasting</option>
        <option>District broadcasting</option>
        <option>Upozela broadcasting</option>
        <option>Union broadcasting</option>
        <option>Others</option>
      </select>
      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Search Field */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white border-2 border-red-600 w-40  -mr-4 text-gray-800  rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Subnav;
