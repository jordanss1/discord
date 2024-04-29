import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import Server from "./Server";
import Home from "./home/Home";

export const servers = [
  { id: "tailwind", name: "Tailwind CSS", img: "tailwind.png" },
  { id: "next", name: "Next", img: "next.png" },
  { id: "mirage", name: "Mirage", img: "mirage.png" },
];

const ServerRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {servers.map((server) => (
        <Route
          path={`/servers/${server.id}`}
          element={<Server name={server.name} />}
        />
      ))}
    </Routes>
  );
};

export default ServerRoutes;
