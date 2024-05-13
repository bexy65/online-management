import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>This is my header</header>
      {children}
      <footer>This is my footer</footer>
    </div>
  );
};

export default Layout;
