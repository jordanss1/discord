import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Server1 from "./server1/Server1";

const ServerRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servers/1" element={<Server1 />} />
    </Routes>
  );
};

export default ServerRoutes;
