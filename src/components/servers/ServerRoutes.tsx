import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { data } from "../../../data";
import Server from "./Server";
import Home from "./home/Home";

const ServerRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {data.map((server) => (
        <Route
          key={server.id}
          path={`/servers/${server.id}/*`}
          element={<Server />}
        />
      ))}
    </Routes>
  );
};

export default ServerRoutes;
