import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-green-700 text-white py-8 h-[800px] px-2 md:h-96 md:px-2 lg:px-0 md:py-12 ">
    <div className="text-center ">
      <h1 className="text-3xl text-white font-medium">
        Ministry of Information and Broadcasting
      </h1>
      <h1 className="text-lg text-gray300">Bangladesh republic government</h1>
    </div>
    {/* Logo */}
    <div className="container mx-auto text-center mb-16"></div>

    {/* Footer Content */}
    <div className="container mx-auto flex flex-wrap justify-between">
      {/* Ministry Information */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h4 className="text-lg font-semibold mb-2">Ministry of Information</h4>
        <p className="text-sm">
          Ministry of Information and Broadcasting, Bangladesh
        </p>
        <p className="text-sm">Address: Dhaka, Bangladesh</p>
      </div>

      {/* Quick Links */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
        <ul className="space-y-2">
          <li>
            <a href="/privacy" className="hover:text-red-600">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/sitemap" className="hover:text-red-600">
              Site Map
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-red-600">
              Contact
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-red-600">
              Condition for uses
            </a>
          </li>
        </ul>
      </div>

      {/* Follow Us */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            className="text-white hover:text-red-600"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            className="text-white hover:text-red-600"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-white hover:text-red-600"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>

      {/* Subscribe for Updates */}
      <div className="w-full md:w-1/4">
        <h4 className="text-lg font-semibold mb-2">
          Planning and Implementation:{" "}
        </h4>
        <p className="text-sm mb-4">
          Cabinet Division, A2I, BCC, DOICT and BASIS
        </p>
        <p className="text-lg font-semibold mb-2">Technical Support:</p>
        <img src="https://i.ibb.co/kmPcQyg/222.png" alt="" />
        {/* <form className="flex flex-col sm:flex-row items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 mb-2 sm:mb-0 sm:mr-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button className="w-full sm:w-auto bg-red-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded active:bg-red-500">
            Subscribe
          </button>
        </form> */}
      </div>
    </div>
  </footer>
);

export default Footer;
