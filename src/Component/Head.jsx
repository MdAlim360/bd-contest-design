import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaLinkedinIn,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Dr. Muhammad Yunus",
    profession: "Honorable Chief Adviser",
    email: "dr.younus22@gmail.com",
    image: "https://i.postimg.cc/QtBmd16Z/Screenshot-2024-08-15-103913.png",
  },
  {
    name: "Md. Humayun Kabir",
    profession: "Senior Secretary",
    email: "md.humayun55@gmail.com",
    image: "https://i.postimg.cc/QN1gYXwm/Screenshot-2024-08-15-104442.png",
  },
  {
    name: "Alice Johnson",
    profession: "Manager",
    email: "alice.johnson@example.com",
    image: "https://i.postimg.cc/Dz44W6K6/Screenshot-2024-08-16-173101.png",
  },
];

const Head = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row lg:items-start">
      {/* Left Side */}
      <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
        <h1 className="text-3xl font-bold mb-2">Meet our department Team</h1>
        <p className="text-lg mb-6">
          They have the real superpowers as administration to lead the country
          in a good way.
        </p>
        <button className="px-6 py-2 border-2 border-red-600 text-red-600 rounded font-medium hover:bg-red-600 hover:text-white transition-colors">
          See All Members
        </button>
      </div>

      {/* Right Side */}
      <div className="lg:w-2/3 flex gap-8 flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-full  md:w-52 lg:w-64 bg-white shadow-lg rounded-lg overflow-hidden group"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover" // Adjusted height
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-sm text-gray-500">{member.profession}</p>
              <a
                href={`mailto:${member.email}`}
                className="text-gray-600 flex items-center mt-2"
              >
                <FaEnvelope className="mr-1" />
                {member.email}
              </a>
            </div>
            {/* Social Media Icons */}
            <div className="absolute left-1/2 bottom-32 transform -translate-x-1/2 rounded-full flex justify-center p-4 bg-white opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Head;
