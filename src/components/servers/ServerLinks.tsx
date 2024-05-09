import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { data } from "../../../data";
import * as Icons from "../icons/icons";

type ServerButtonPropsType = {
  id?: number;
  children: React.ReactNode;
};

const ServerLinks = (): ReactElement => {
  return (
    <div className="hidden md:block bg-gray-900">
      <div className=" p-3 flex flex-col gap-2 overflow-y-scroll">
        <ServerButton id={0}>
          <Icons.Discord className="w-7 h-5" />
        </ServerButton>
        <hr className="border-t-white/[.06] border-t-2 rounded mx-2" />
        {data.map(({ id, img }) => (
          <ServerButton id={id} key={id}>
            <img src={`/servers/${img}`} alt="" />
          </ServerButton>
        ))}
      </div>
    </div>
  );
};

const ServerButton = ({
  id,
  children,
}: ServerButtonPropsType): ReactElement => {
  const { state } = useLocation();

  const firstChannel = data
    .find((server) => id === server.id)
    ?.categories.map((c) => c.channels)
    .flat()[0].id;

  const route = id ? `/servers/${id}/channels/${firstChannel}` : "/";

  const locationState = state ? state : { server: 0 };

  return (
    <Link state={{ server: id, channel: firstChannel }} to={route}>
      <div className="relative block group">
        <div className="absolute flex -left-3 h-full items-center">
          <div
            className={` ${
              locationState.server === id
                ? "h-10 opacity-100"
                : "h-5 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100"
            } bg-white w-1 rounded-r opacity-0 transition-all duration-200  origin-left`}
          />
        </div>
        <div className="group-active:translate-y-px">
          <div
            className={`${
              locationState.server === id
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

export default ServerLinks;
