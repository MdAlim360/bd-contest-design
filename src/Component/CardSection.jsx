/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { TbCoinTaka } from "react-icons/tb";
import {
  FaNewspaper,
  FaFilm,
  FaTv,
  FaUserShield,
  FaInfoCircle,
} from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { MdOutlinePolicy } from "react-icons/md";

// Cards data with icons
const cards = [
  {
    icon: <TbCoinTaka />,
    title: "Annual Performance",
    subTitle: "A Detailed Report on Annual Goals and Achievements.",
  },
  {
    icon: <FaUserShield />,
    title: "Social Security",
    subTitle: "Information on Social Protection and Benefits.",
  },
  {
    icon: <FaFilm />,
    title: "Movie",
    subTitle: "Latest Updates and Information on Government-Supported Films.",
  },
  {
    icon: <FaNewspaper />,
    title: "Press",
    subTitle: "Official Press Releases and News Updates.",
  },
  {
    icon: <FaTv />,
    title: "Television",
    subTitle: "Government Television Programs and Broadcasts.",
  },
  {
    icon: <MdOutlinePolicy />,
    title: "Laws/Policies",
    subTitle: "Overview of Current Laws and Policies.",
  },
  {
    icon: <IoMdPeople />,
    title: "Citizen e-services",
    subTitle: "Online Services and Digital Solutions for Citizens.",
  },

  {
    icon: <FaInfoCircle />,
    title: "Right to Information",
    subTitle: "Access to Government Information and Transparency.",
  },
];

const CardSection = () => (
  <section className="py-8 mx-auto bg-gray-50 relative">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src="https://i.postimg.cc/633KjHdB/Screenshot-2024-08-14-193443.png"
        alt="Background"
        className="w-full h-full object-cover opacity-20"
      />
    </div>

    <div className="relative z-10 container mx-auto px-4">
      <div className="flex justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-gray-800 relative z-20">
            Explore Our Departments
          </h2>
          <h1 className="text-lg text-gray-600 mb-8">
            We are offering the following information's about us that what we
            actually.
          </h1>
        </div>
        <div>
          <button className="px-6 py-2 border border-red-300 text-white font-medium bg-red-600 rounded hover:bg-red-800  hover:text-white transition-colors duration-300">
            Services
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-20">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 h-80 relative"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-[60px] text-red-600 pt-2">{card.icon}</div>
            <h3 className="text-xl font-semibold pt-4 text-gray-800 hover:text-red-600">
              {card.title}
            </h3>
            <p className="text-gray-600 pt-4 pb-4">{card.subTitle}</p>
            <button className="px-6 py-2 border border-red-300 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-300 font-medium rounded">
              Read more →
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CardSection;
