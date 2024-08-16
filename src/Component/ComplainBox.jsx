/* eslint-disable react/jsx-no-duplicate-props */
import { useSpring, animated } from "react-spring";

const ComplainBox = () => {
  // Animation for the form and image
  const imageAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-20px)" },
    config: { duration: 500 },
  });

  const formAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(20px)" },
    config: { duration: 500 },
  });

  return (
    <div className="container bg-gray-50 mx-auto flex flex-col md:flex-row  rounded-lg overflow-hidden gap-0 md:gap-1 lg:gap-32">
      {/* Image Section */}
      <animated.div
        className="w-full  md:w-[600px] lg:w-[650px] h-96 md:h-auto bg-cover bg-center"
        style={{
          backgroundImage: `url('https://i.postimg.cc/LXQYqPZ2/Screenshot-2024-08-16-155235-removebg-preview.png')`,
          ...imageAnimation, // Correctly apply the animation
        }}
      >
        {/* Optional: Add content or overlay here */}
      </animated.div>

      {/* Form Section */}
      <animated.div
        style={formAnimation}
        className="md:w-1/2 p-6 flex flex-col justify-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Complaint Form</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Complaint
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Your Complaint"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 border-2 border-red-600 text-red-500 rounded-lg shadow-md hover:bg-red-600 hover:text-white transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </animated.div>
    </div>
  );
};

export default ComplainBox;
