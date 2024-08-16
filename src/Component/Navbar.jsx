import { useState } from "react";
import { Menu, Button, Popover, ConfigProvider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = () => {
    setVisible(!visible);
  };

  // const content = (
  //   <div className="p-4 text-sm">
  //     <p>Content</p>
  //     <p>Content</p>
  //   </div>
  // );

  const menu = (
    <Menu className="bg-green-600 text-white">
      <Menu.Item key="1">
        <NavLink to="/">Home</NavLink>
      </Menu.Item>
      <Menu.SubMenu key="sub1" title="About Us">
        <Menu.Item key="2">
          <NavLink to="/about">Ministry Introduction</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/about/history">History & Activities</NavLink>
        </Menu.Item>
        {/* Add other submenu items here */}
      </Menu.SubMenu>
      <Menu.Item key="4">
        <NavLink to="/departments">Departments/Organizations</NavLink>
      </Menu.Item>
      <Menu.Item key="5">
        <NavLink to="/projects">Projects</NavLink>
      </Menu.Item>
      <Menu.Item key="6">
        <NavLink to="/contact">Contact & Feedback</NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className="bg-green-700 text-white shadow-md p-4  md:fixed z-50 w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-4">
          <NavLink to="/" className="flex items-center space-x-2">
            <img
              className="w-16 bg-white rounded-full"
              src="https://i.postimg.cc/3xbM5LSR/bangladesh-govt-republic-of-bangladesh-logo-D8-A916-D881-seeklogo-com.png"
              alt="Bangladesh Government Logo"
            />
            <span>Ministry of Information</span>
          </NavLink>
        </div>

        {/* Large devices menu */}
        <div className="hidden lg:flex space-x-6">
          {["/", "/about", "/departments", "/projects", "/contact"].map(
            (path, index) => {
              const label = [
                "Home",
                "About Us",
                "Departments/Organizations",
                "Projects",
                "Contact & Feedback",
              ][index];
              return (
                <NavLink to={path} key={path} end>
                  {({ isActive }) => (
                    <ConfigProvider>
                      <Popover
                        className="bg-green-700 text-white"
                        placement="bottomRight"
                        // content={content}
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
  );
};

export default Navbar;
