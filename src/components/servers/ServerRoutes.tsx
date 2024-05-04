import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import Server from "./Server";
import Home from "./home/Home";

export const servers = [
  { id: 1, name: "Tailwind CSS", img: "tailwind.png" },
  { id: 2, name: "Next", img: "next.png" },
  { id: 3, name: "Mirage", img: "mirage.png" },
];

const ServerRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {servers.map((server) => (
        <Route
          key={server.name}
          path={`/servers/${server.id}/*`}
          element={<Server name={server.name} />}
        />
      ))}
    </Routes>
  );
};

export default ServerRoutes;
