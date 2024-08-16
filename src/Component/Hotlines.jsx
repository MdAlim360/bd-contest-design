/* eslint-disable no-undef */
import {
  FaAmbulance,
  FaInfoCircle,
  FaFireExtinguisher,
  FaBabyCarriage,
  FaShieldAlt,
  FaExclamationTriangle,
  FaBroadcastTower,
} from "react-icons/fa";
import { Carousel } from "antd";
import { FaPhone } from "react-icons/fa"; // Add phone icon
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io"; // Arrow icons
import "antd/dist/reset.css"; // Ensure Ant Design styles are applied
import { useRef } from "react";

const hotlines = [
  {
    number: "333",
    department: "Government information",
    icon: <FaInfoCircle />,
  },

  { number: "999", department: "Emergencies services", icon: <FaAmbulance /> },
  {
    number: "16163",
    department: "Fire Department",
    icon: <FaFireExtinguisher />,
  },
  {
    number: "109",
    department: "Woman security",
    icon: <FaBabyCarriage />,
  },
  { number: "106", department: "ACC", icon: <FaShieldAlt /> },
  { number: "1090", department: "Disaster", icon: <FaExclamationTriangle /> },
  { number: "100", department: "BTRC", icon: <FaBroadcastTower /> },
];

const Hotlines = () => {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) carouselRef.current.prev();
  };

  const handleNext = () => {
    if (carouselRef.current) carouselRef.current.next();
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto relative flex flex-col md:flex-row   rounded-lg">
        <div className=" w-full md:w-1/3 flex items-center  md:justify-start p-4">
          <div className=" items-center">
            <FaPhone className="text-red-600 text-4xl" />
            <div>
              <div className=" text-3xl font-semibold">Helplines and</div>
              <div className=" text-3xl font-semibold">Emergency Numbers</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 relative">
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow-md focus:outline-none z-10"
          >
            <IoMdArrowBack size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow-md focus:outline-none z-10"
          >
            <IoMdArrowForward size={24} />
          </button>
          <Carousel
            className="overflow-hidden"
            dots={false}
            ref={carouselRef}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay
            centerMode
            centerPadding="0px"
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  centerMode: true,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true,
                },
              },
            ]}
          >
            {hotlines.map((item, index) => (
              <div
                key={index}
                className="relative bg-gray-200 p-6 rounded-lg shadow-md mx-1 " // Adjusted mx-1 for reduced gap
              >
                <div className="absolute top-2 right-2 text-red-600 text-[40px]">
                  {item.icon}
                </div>
                <div className="mt-8 pl-8">
                  <div className="text-2xl font-bold text-red-600">
                    {item.number}
                  </div>
                  <div className="text-gray-700 mt-2 text-lg pb-10">
                    {item.department}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hotlines;
