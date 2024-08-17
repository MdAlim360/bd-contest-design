import { useState } from "react";
import { Menu, Button, Popover, ConfigProvider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = () => {
    setVisible(!visible);
  };

  const getContentForPath = (path) => {
    switch (path) {
      case "/about":
        return (
          <div className="p-4 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-gradient-to-r from-green-100 via-white to-green-100 rounded-lg shadow-lg">
              {/* Title-1: Left Side */}
              <div className="space-y-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-green-800 border-b-2 border-green-500 pb-2">
                  Ministry Introduction
                </h2>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  History and Functions
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Mission and Vision
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  List of Former Ministers
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Senior Secretary
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  List of Former Secretaries
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Organizational Structure
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Allocation of Business
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Success and Achievement
                </a>
              </div>

              {/* Title-2: Middle Side */}
              <div className="space-y-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-green-800 border-b-2 border-green-500 pb-2">
                  Manpower
                </h2>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Officials
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Distribution of Work
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Information Officer
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Grievance Redressal Officer
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Appellate Officer
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Focal Point Officers
                </a>
              </div>

              {/* Title-3: Right Side */}
              <div className="space-y-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-green-800 border-b-2 border-green-500 pb-2">
                  Ministry Services
                </h2>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Service Commitment
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  List of Citizen e-Services
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  List of Other Services
                </a>
              </div>
            </div>
          </div>
        );
      case "/departments":
        return (
          <div className="p-4 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-gradient-to-r from-green-100 via-white to-green-100 rounded-lg shadow-lg">
              {/* Left Side */}
              <div className="space-y-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Directorate of Information
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Bangladesh Radio
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Bangladesh Television
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Directorate of Films and Publications
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Directorate of Mass Communication
                </a>
              </div>

              {/* Middle Side */}
              <div className="space-y-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Bangladesh Press Council
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Bangladesh Film Development Corporation
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Bangladesh Film Archive
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Press Institute Bangladesh
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Bangladesh News Agency
                </a>
              </div>

              {/* Right Side */}
              <div className="space-y-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  National Media Institute
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Bangladesh Film Censor Board
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Information Commission
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Bangladesh Film and Television Institute
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Bangladesh Journalist Welfare Trust
                </a>
              </div>
            </div>
          </div>
        );
      case "/projects":
        return (
          <div className="p-4 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gradient-to-r from-green-100 via-white to-green-100 rounded-lg shadow-lg">
              {/* Ongoing Projects: Left Side */}
              <div className="space-y-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-green-800 border-b-2 border-green-500 pb-2">
                  Ongoing
                </h2>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Ongoing Projects
                </a>

                {/* Add more ongoing projects here */}
              </div>

              {/* Completed Projects: Right Side */}
              <div className="space-y-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-green-800 border-b-2 border-green-500 pb-2">
                  Completed
                </h2>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Completed Projects
                </a>

                {/* Add more completed projects here */}
              </div>
            </div>
          </div>
        );
      case "/contact":
        return (
          <div className="p-4 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gradient-to-r from-green-100 via-white to-green-100 rounded-lg shadow-lg">
              {/* Communication: Left Side */}
              <div className="space-y-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-green-800 border-b-2 border-green-500 pb-2">
                  Communication
                </h2>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Office Address
                </a>
                {/* Add more links for Communication here if needed */}
              </div>

              {/* Opinion: Right Side */}
              <div className="space-y-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-green-800 border-b-2 border-green-500 pb-2">
                  Opinion
                </h2>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Your Inquiry
                </a>
                <a
                  href="/"
                  className="block text-black hover:text-red-500 transition-colors duration-200"
                >
                  Draft Act/Policy
                </a>
                {/* Add more links for Opinion here if needed */}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const menu = (
    <Menu className="bg-green-600 text-white">
      <Menu.Item key="1">
        <NavLink to="/">Home</NavLink>
      </Menu.Item>
      <Menu.SubMenu key="sub1" title="About Us">
        <Menu.Item key="2">
          <NavLink to="/about/introduction">Ministry Introduction</NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/about/history">History & Activities</NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink to="/about/history">Focal Point Officers</NavLink>
        </Menu.Item>
        <Menu.Item key="6">
          <NavLink to="/about/history">Appellate Officer</NavLink>
        </Menu.Item>
        <Menu.Item key="7">
          <NavLink to="/about/history">distribution of work</NavLink>
        </Menu.Item>
        {/* Add other submenu items here */}
      </Menu.SubMenu>
      <Menu.SubMenu key="sub2" title="Projects">
        <Menu.Item key="2">
          <NavLink to="/about/introduction">Appellate Officer</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/about/history">History & Activities</NavLink>
        </Menu.Item>
        {/* Add other submenu items here */}
      </Menu.SubMenu>
      <Menu.SubMenu key="sub3" title="Departments/Organizations">
        <Menu.Item key="2">
          <NavLink to="/about/introduction">Ministry Introduction</NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/about/history">History & Activities</NavLink>
        </Menu.Item>
        {/* Add other submenu items here */}
      </Menu.SubMenu>
      <Menu.SubMenu key="sub4" title="Contact & Feedback">
        <Menu.Item key="2">
          <NavLink to="/about/introduction">Ministry Introduction</NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink to="/about/history">History & Activities</NavLink>
        </Menu.Item>
        {/* Add other submenu items here */}
      </Menu.SubMenu>
      {/* <Menu.Item key="4">
        <NavLink to="/departments">Departments/Organizations</NavLink>
      </Menu.Item>
      <Menu.Item key="5">
        <NavLink to="/projects">Projects</NavLink>
      </Menu.Item>
      <Menu.Item key="6">
        <NavLink to="/contact">Contact & Feedback</NavLink>
      </Menu.Item> */}
    </Menu>
  );

  return (
    <div>
      <nav className="bg-green-700 text-white shadow-md p-4 md:fixed z-50 w-full">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center space-x-4">
            <NavLink to="/" className="flex items-center space-x-6">
              <img
                className="w-16 bg-white rounded-full"
                src="https://i.postimg.cc/3xbM5LSR/bangladesh-govt-republic-of-bangladesh-logo-D8-A916-D881-seeklogo-com.png"
                alt="Bangladesh Government Logo"
              />
              <span className="pl-2">
                Ministry of Information
                <p className="pl-0 md:pl-8"> and Broadcasting</p>
              </span>
            </NavLink>
          </div>

          {/* Large devices menu */}

          <div>
            <div className="hidden lg:flex space-x-0">
              {["/", "/about", "/departments", "/projects", "/contact"].map(
                (path, index) => {
                  const label = [
                    "Home",
                    "About Us",
                    "Departments/Organizations",
                    "Projects",
                    "Contact & Feedback",
                  ][index];
                  const content = getContentForPath(path);
                  return (
                    <NavLink to={path} key={path} end>
                      {({ isActive }) => (
                        <ConfigProvider>
                          <Popover
                            className="bg-green-700 text-white"
                            placement="bottom"
                            content={content}
                          >
                            <button
                              className={`transition-transform duration-300 text-white px-4 py-2 rounded ${
                                isActive ? "bg-red-500" : "hover:bg-green-800"
                              }`}
                              style={{ whiteSpace: "nowrap" }}
                            >
                              {label}
                            </button>
                          </Popover>
                        </ConfigProvider>
                      )}
                    </NavLink>
                  );
                }
              )}
            </div>
          </div>

          {/* Small devices menu */}
          <div className="lg:hidden">
            <Button
              icon={<MenuOutlined />}
              onClick={handleMenuClick}
              className="text-white bg-green-700 border-none hover:bg-green-600"
            />
            {visible && (
              <div className="absolute top-16 right-4 bg-white text-black p-4 shadow-lg rounded-lg z-50">
                {menu}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
