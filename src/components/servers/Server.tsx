import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import data from "../../../data.json";
import * as Icons from "../icons/icons";

type ServerPropsType = {
  name: string;
};

const Server = ({ name }: ServerPropsType): ReactElement => {
  return (
    <>
      <div className="bg-gray-800 flex flex-col w-60">
        <button className="px-4 h-12 flex items-center gap-1 shadow-sm font-title text-white text-[15px] hover:bg-gray-550/[0.16] transition">
          <div className="relative w-4 h-4">
            <Icons.Verified className="w-4 h-4 absolute text-gray-550" />
            <Icons.Check className="w-4 h-4 absolute" />
          </div>
          {name}
          <Icons.Chevron className="ml-auto w-[18px] h-[18px] opacity-80" />
        </button>
        <div className="flex-1 space-y-[21px]  ml-[.1rem] pt-3 text-gray-300 w-full overflow-y-scroll font-medium">
          {data["1"].categories.map(({ id, label, channels }) => (
            <div key={id} className="px-0.5">
              {label && (
                <button className="flex items-center gap-0.5 tracking-wide text-xs font-title uppercase">
                  <Icons.Arrow className="w-3 h-3" />
                  {label}
                </button>
              )}

              {channels.map((channel) => {
                channel = channel as ChannelLinkPropsType["channel"];

                return (
                  <div key={channel.id} className="space-y-0.5 mt-[5px]">
                    <ChannelLink channel={channel} />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-700 flex flex-col flex-1">
        <div className="p-3 h-12 flex items-center shadow-sm">General</div>
        <div className="p-3 flex-1 ml-[.1rem] overflow-y-scroll space-y-4">
          {[...Array(40)].map((_, i) => (
            <p key={i}>
              message {i} Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Perspiciatis porro magni quas esse eligendi ratione hic
              inventore id fuga quam. Minima voluptatem ad debitis? Nesciunt
              laboriosam dicta similique harum ex.
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Server;

type ChannelLinkPropsType = {
  channel: {
    id: number;
    label: string;
    icon?: keyof typeof Icons;
  };
};

const ChannelLink = ({ channel }: ChannelLinkPropsType): ReactElement => {
  const { state } = useLocation();

  const { label, icon, id } = channel;

  const active = state.channel === id;

  let Icon = icon ? Icons[icon] : Icons.Hashtag;

  return (
    <Link
      state={{ server: state.server, channel: id }}
      to={`/servers/${state.server}/channels/${id}`}
    >
      <div
        className={`${
          active
            ? "text-white bg-gray-550/[.32]"
            : "text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16]"
        } flex group cursor-pointer select-none gap-1.5 rounded  items-center py-1 px-2 mx-2 `}
      >
        <Icon className="w-5 h-5 text-gray-400" />
        {label}
        <Icons.AddPerson className="w-4 h-4 ml-auto text-gray-200 hover:text-gray-100 opacity-0 group-hover:opacity-100" />
      </div>
    </Link>
  );
};
