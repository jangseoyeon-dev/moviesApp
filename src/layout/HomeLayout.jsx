import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
