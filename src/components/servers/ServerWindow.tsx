import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import * as Icons from "../icons/icons";
import { servers } from "./ServerRoutes";

type ServerButtonPropsType = {
  id?: number;
  children: React.ReactNode;
};

const ServerWindow = (): ReactElement => {
  return (
    <div className="bg-gray-900 p-3 flex flex-col gap-2 overflow-y-scroll">
      <ServerButton>
        <Icons.Discord className="w-7 h-5" />
      </ServerButton>
      <hr className="border-t-white/[.06] border-t-2 rounded mx-2" />
      {servers.map(({ id, img }) => (
        <ServerButton id={id} key={id}>
          <img src={`/servers/${img}`} alt="" />
        </ServerButton>
      ))}
    </div>
  );
};

export default ServerWindow;

const ServerButton = ({
  id,
  children,
}: ServerButtonPropsType): ReactElement => {
  const { state } = useLocation();

  const route = id ? `/servers/${id}` : "/";

  return (
    <Link state={{ server: id }} to={route}>
      <div className="relative block group">
        <div className="absolute flex -left-3 h-full items-center">
          <div
            className={` ${
              state.server === id
                ? "h-10 opacity-100"
                : "h-5 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100"
            } bg-white w-1 rounded-r opacity-0 transition-all duration-200  origin-left`}
          />
        </div>
        <div className="group-active:translate-y-px">
          <div
            className={`${
              state.server === id
                ? "rounded-2xl bg-brand text-white"
                : "text-gray-100 bg-gray-700 group-hover:rounded-2xl group-hover:bg-brand group-hover:text-white"
            }  transition-all rounded-3xl duration-200 w-12 h-12 flex items-center overflow-hidden justify-center`}
          >
            {children}
          </div>
        </div>
      </div>
    </Link>
  );
};
