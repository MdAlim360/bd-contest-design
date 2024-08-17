/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { TbCoinTaka } from "react-icons/tb";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbBell, TbCalendar, TbFileText } from "react-icons/tb";
import { TbLighter } from "react-icons/tb";

import {
  FaNewspaper,
  FaFilm,
  FaTv,
  FaUserShield,
  FaInfoCircle,
} from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { MdOutlinePolicy } from "react-icons/md";
import Subnav from "./Subnav";
import { Link } from "react-router-dom";

// Cards data with icons
const cards = [
  {
    icon: <TbCoinTaka />,
    title: "Annual Performance",
    link1: "Guidelines/Circulars",
    link2: "Annual performance",
    link3: "Monitoring and evaluation report",
    link4: "APAMS software link",
  },
  {
    icon: <FaUserShield />,
    title: "Social Security",
    link1: "Social security",
    link2: "Coordination Management",
    link3: "Activities/Notifications",
    link4: "s/Policies",
  },
  {
    icon: <FaFilm />,
    title: "Movie",
    link1: "Short Film Policy-2012",
    link2: "Film making in joint",
    link3: "Jury Board / Censor Board",
    link4: "National Film Awards",
  },
  {
    icon: <FaNewspaper />,
    title: "Press",
    link1: "Steps in the process",
    link2: "List of approved online",
    link3: "Laws, rules, regulations",
    link4: "List of Government Media",
  },
  {
    icon: <FaTv />,
    title: "Television",
    link1: "List of approved IP",
    link2: "Foreign television",
    link3: "National Broadcasting",
    link4: "APAMS software link",
  },
  {
    icon: <MdOutlinePolicy />,
    title: "Laws/Policies",
    link1: "Trust Rules",
    link2: "Journalists Welfare",
    link3: "Cable TV Rules-2010",
    link4: "National Broadcasting",
  },
  {
    icon: <IoMdPeople />,
    title: "Citizen e-services",
    link1: "Guidelines/Circulars",
    link2: "Annual performance",
    link3: "License Renewal",
    link4: "Provision of non-objection",
  },
  {
    icon: <FaInfoCircle />,
    title: "Right to Information",
    link1: "Guidelines/Circulars",
    link2: "Annual performance",
    link3: "Monitoring and evaluation",
    link4: "APAMS software link",
  },
  // New cards
  {
    icon: <TbBell />,
    title: "Notice/Order/Circular",
    link1: "Notice/Order/Circular",
    link2: "Notification/Circular",
    link3: "Office Order/GIO/Passport",
    link4: "News bulletin",
  },
  {
    icon: <TbCalendar />,
    title: "Annual Agreement",
    link1: "Annual Agreement",
    link2: "Guidelines/Circulars",
    link3: "Annual performance",
    link4: "Monitoring and evaluation",
  },
  {
    icon: <TbFileText />,
    title: "Policies and Publications",
    link1: "Policies and Publications",
    link2: "Policy",
    link3: "Laws and Regulations",
    link4: "Publications report",
  },
  {
    icon: <TbLighter />,
    title: "Innovative activities",
    link1: "Innovative activities",
    link2: "Action plans/guidelines",
    link3: "Innovation Team",
    link4: "Notifications/Circulars",
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
      <div className="flex  justify-between">
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
          <Subnav />
        </div>
        {/* <div>
          <button className="px-6 py-2 border border-red-300 text-white font-medium bg-red-600 rounded hover:bg-red-800  hover:text-white transition-colors duration-300">
            Services
          </button>
        </div> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 h-96 relative"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-[60px] text-red-600 pt-0">{card.icon}</div>
            <h3 className="text-xl font-semibold pt-2 text-gray-800 hover:text-red-600">
              {card.title}
            </h3>
            <Link to={"/"} className="">
              <div className="flex items-center gap-2 text-gray-600 pb-2 pt-4">
                <FaExternalLinkAlt />
                {card.link1}
              </div>
            </Link>
            <Link to={"/"} className="">
              <div className="flex items-center gap-2 text-gray-600 pb-2 pt-2">
                <FaExternalLinkAlt />
                {card.link2}
              </div>
            </Link>
            <Link to={"/"} className="">
              <div className="flex items-center gap-2 text-gray-600 pb-2 pt-2">
                <FaExternalLinkAlt />
                {card.link3}
              </div>
            </Link>
            <Link to={"/"} className="">
              <div className="flex items-center gap-2 text-gray-600 pb-4 pt-2">
                <FaExternalLinkAlt />
                {card.link4}
              </div>
            </Link>

            <button className="px-6 py-2  border border-red-300 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-300 font-medium rounded">
              Read more →
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CardSection;
