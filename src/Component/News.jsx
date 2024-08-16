/* eslint-disable react/prop-types */
import { Carousel } from "antd";
import {
  RightOutlined,
  LeftOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";

const newsData = [
  {
    id: 1,
    image: "https://i.postimg.cc/RVpypD1R/Screenshot-2024-08-16-151728.png",
    date: "24 July 2024",
    status: "In Development",
    title: "Metro Road Design Plan 2025",
  },
  {
    id: 2,
    image:
      "https://i.postimg.cc/B6VSNxkL/silhouette-oresundsbron-bridge-water.jpg",
    date: "25 July 2024",
    status: "In Development",
    title: "New Bridge Construction 2025",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/qM7Y4PtT/Screenshot-2024-08-15-101241.png",
    date: "26 July 2024",
    status: "In Development",
    title: "Urban Rail Project 2026",
  },
  {
    id: 4,
    image: "https://i.postimg.cc/xCFLVM6W/Screenshot-2024-08-16-152542.png",
    date: "27 July 2024",
    status: "In Development",
    title: "New Industrial Boom 2025: Announcement",
  },
  {
    id: 5,
    image: "https://i.postimg.cc/bJd2gdqL/Screenshot-2024-08-16-152727.png",
    date: "28 July 2024",
    status: "In Development",
    title: "Riverbank Protection Project 2025",
  },
  {
    id: 6,
    image: "https://i.postimg.cc/x8th2sw9/Screenshot-2024-08-16-151813.png",
    date: "28 July 2026",
    status: "In Development",
    title: "Environmental Sustainability",
  },
];

const News = () => {
  // Define the animation variants
  const arrowVariants = {
    hover: { scale: 1.2, backgroundColor: "#f87171" }, // Light red background on hover
    tap: { scale: 0.9 }, // Scale down slightly on click
  };

  // eslint-disable-next-line react/prop-types
  const PrevArrow = ({ onClick }) => (
    <motion.div
      onClick={onClick}
      className="absolute top-1/2 transform -translate-y-1/2 left-0 flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white cursor-pointer z-10"
      variants={arrowVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <LeftOutlined className="text-2xl" />
    </motion.div>
  );

  const NextArrow = ({ onClick }) => (
    <motion.div
      onClick={onClick}
      className="absolute top-1/2 transform -translate-y-1/2 right-0 flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white cursor-pointer z-10"
      variants={arrowVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <RightOutlined className="text-2xl" />
    </motion.div>
  );

  return (
    <div className="news-carousel container mx-auto py-8 relative">
      <h2 className="text-3xl font-bold pl-2 mb-8 ">
        Latest News from Bangladesh
      </h2>
      <Carousel
        arrows
        infinite={true}
        slidesToShow={4}
        slidesToScroll={1}
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        responsive={[
          { breakpoint: 1024, settings: { slidesToShow: 3 } },
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 640, settings: { slidesToShow: 1 } },
        ]}
      >
        {newsData.map((item) => (
          <div key={item.id} className="news-card px-2">
            <div className="bg-white shadow-lg border-2 rounded-lg overflow-hidden flex flex-col h-[370px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <div className="news-date flex items-center text-green-700 mb-2">
                  <span className="-mt-9 ml-5 bg-green-500 text-white py-1 px-2 rounded">
                    {item.date}
                  </span>
                </div>
                <div className="flex gap-4 ml-5">
                  <div className="text-gray-600">{item.status}</div>
                  <div className="news-status flex items-center text-gray-600 mb-2">
                    <CommentOutlined className="mr-2" />
                    <p>Comment off</p>
                  </div>
                </div>
                <h3 className="news-title hover:text-red-600 font-semibold text-lg ml-5 text-gray-800">
                  {item.title}
                </h3>
                <div className="news-link -ml-48 md:-ml-40 lg:-ml-24 mt-auto flex justify-center items-center text-gray-600 hover:text-red-600 font-medium">
                  <Link to={"/"} className="hover:text-red-600">
                    <span>Continue Reading</span>
                  </Link>
                  <FaArrowRightLong className="ml-2 mt-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="text-center pt-12">
        <button className="px-6 py-2 border border-red-300 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-300 font-medium rounded">
          Explore more →
        </button>
      </div>
    </div>
  );
};

export default News;
