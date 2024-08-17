import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

const Eservices = () => {
  return (
    <div className="bg-green-600 py-10 px-5 lg:px-20 h-[600px]">
      <div className="container mx-auto">
        <motion.div
          className="lg:flex lg:items-start lg:justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:w-1/3 text-left">
            <h2 className="text-2xl pt-4 md:pt-4 lg:pt-16 lg:text-3xl font-bold text-white">
              Explore Online Services & Resource
            </h2>
            <p className="mt-4 text-white pb-3 md:pb-3 lg:pb-6 pt-0 md:pt-0 lg:pt-3">
              City government providing a wide range of online services to
              people who need help.
            </p>
            <button className="mt-6 py-2 px-4 border bg-red-600 text-white border-red-500  hover:bg-red-800 hover:text-white transition-all duration-300">
              All Events
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-0 lg:gap-10 mt-10 lg:mt-0 lg:w-2/3">
            <motion.div
              className="space-y-4 pt-0 md:pt-0 lg:pt-16"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                "Parking Permission",
                "File a Tax Information",
                "Birth Certificate Information",
                "Get Building Permission",
                "Apply for Driving License",
                "Report Pollution",
              ].map((service, index) => (
                <a
                  href="#"
                  key={index}
                  className="flex justify-between items-center p-1 ml-0 lg:ml-20 hover:shadow-lg hover:bg-red-600 transition-shadow duration-300 text-white "
                >
                  <span className="flex-grow font-medium text-lg ">
                    {service}
                  </span>
                  <IoIosArrowForward className="ml-4" />
                </a>
              ))}
            </motion.div>

            <motion.div
              className="space-y-4 pt-0 md:pt-0 lg:pt-16"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                "Public Service Identity",
                "Information for a City Job",
                "Professional Licenses",
                "National Planning Framework",
                "Apply for Business License",
                "Court Service Information",
              ].map((service, index) => (
                <a
                  href="#"
                  key={index}
                  className="flex justify-between items-center p-1 ml-0 lg:ml-20 hover:shadow-lg transition-shadow duration-300 text-white hover:bg-red-600 "
                >
                  <span className="flex-grow font-medium text-lg">
                    {service}
                  </span>
                  <IoIosArrowForward className="ml-4" />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Eservices;
