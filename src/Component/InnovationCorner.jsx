import { FaUsers, FaCalendarCheck, FaChartLine } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";

const InnovationCorner = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto p-4 md:flex justify-between items-start space-y-4 md:space-y-0 md:space-x-6 rounded-lg">
        {/* Left Section */}
        <div className="md:w-1/4 space-y-4">
          <h2 className="text-2xl font-bold">Innovation Corner</h2>
          <div className="space-y-2">
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-green-800"
            >
              <FaUsers className="mr-2" /> Innovation Team
            </a>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-green-800"
            >
              <FaCalendarCheck className="mr-2" /> Annual Work-plan of
              Innovation Team
            </a>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-green-800"
            >
              <FaChartLine className="mr-2" /> Progress Report
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="md:w-2/4 space-y-4">
          <h2 className="text-2xl font-bold">
            Government Employee Management System (GEMS)
          </h2>
          <a href="#" className="block text-gray-600 hover:text-green-800">
            Government Employee Management System (GEMS)
          </a>
          <h2 className="text-2xl font-bold">National Anthem</h2>
          <div className="flex items-center space-x-2">
            <AiFillSound className="text-2xl" />
            <audio controls className="w-full">
              <source src="/path/to/your/audio/file.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/4 flex flex-col space-y-4">
          <a href="/">
            <img
              src="https://i.ibb.co/2jCpT10/1111.png"
              alt="Placeholder Image"
              className="rounded-lg shadow-md "
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InnovationCorner;
