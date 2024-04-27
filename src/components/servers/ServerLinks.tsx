import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import DiscordIcon from "../DiscordIcon";
import ServerComponent from "./ServerComponent";

const ServerLinks = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-gray-900 p-3 flex flex-col gap-2 overflow-y-scroll">
      <ServerComponent route="/">
        <DiscordIcon className="w-7 h-5" />
      </ServerComponent>
      <ServerComponent route="/server/1">S1</ServerComponent>
    </div>
  );
};

export default ServerLinks;
