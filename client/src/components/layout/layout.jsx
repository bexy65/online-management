import React, { useContext, useState } from "react";
import Header from "./header";
import { Drawer } from "@mui/material";
import ListItems from "./listItems";
import Footer from "./footer";

const Layout = ({ children }) => {
  const { isOpen, setIsOpen } = useState(false);

  const toggleSidebar = () => {
    setIsOpen((e) => !e);
  };

  return (
    <div className="layout-container w-full p-2">
      <Header onClick={toggleSidebar} />
      <div className="flex flex-grow overflow-hidden">
        <div onClick={toggleSidebar} className="hidden">
          <Drawer open={isOpen}>
            <ListItems />
          </Drawer>
        </div>
        <div className="hidden md:w-1/5 md:flex bg-blue-300 mr-4 p-2">
          <ListItems />
        </div>
        <div
          className="w-full md:w-4/5 min-h-screen overflow-y-auto no-scrollbar"
          style={{ maxHeight: "calc(100vh - 10px)" }}
        >
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
