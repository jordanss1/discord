import { ReactElement } from "react";
import "../styles.css";
import ServerRoutes from "./components/servers/ServerRoutes";
import ServerLinks from "./components/servers/ServerLinks";
import "./index.css";

const App = (): ReactElement => {
  return (
    <div className="flex text-gray-100 h-screen">
      <ServerLinks />
      <ServerRoutes />
    </div>
  );
};

export default App;
