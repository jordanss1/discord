import { ReactElement } from "react";
import "../styles.css";
import ServerLinks from "./components/servers/ServerLinks";
import ServerRoutes from "./components/servers/ServerRoutes";
import "./index.css";

//test

const App = (): ReactElement => {
  return (
    <div className="flex text-gray-100 h-screen">
      <ServerLinks />
      <ServerRoutes />
    </div>
  );
};

export default App;
