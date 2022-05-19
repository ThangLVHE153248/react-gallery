import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const HomeRouter = ({ path, component }) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default HomeRouter;
