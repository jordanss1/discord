import { ReactElement, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChannelType, data } from "../../../data";
import * as Icons from "../icons/icons";

type ServerPropsType = {
  name: string;
};

const Server = ({ name }: ServerPropsType): ReactElement => {
  const [closedCategories, setClosedCategories] = useState<number[]>([]);
  const { state } = useLocation();

  let server = data[state ? (state.server as keyof typeof data) : 1];
  let channel = server.categories
    .map((c) => c.channels)
    .flat()
    .find((c) => (state.channel ? c.id === state.channel : 1)) as ChannelType;

  const toggleCategory = (categoryId: number) => {
    setClosedCategories((closedCategories) =>
      closedCategories.includes(categoryId)
        ? closedCategories.filter((id) => id !== categoryId)
        : [...closedCategories, categoryId]
    );
  };

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
        <div className="flex-1 space-y-[21px] pt-3 text-gray-300 w-full overflow-y-scroll font-medium">
          {data[state.server as keyof typeof data].categories.map(
            ({ id, label, channels }) => {
              const channelList = channels as ChannelType[];

              return (
                <div key={id} className="px-0.5">
                  {label && (
                    <button
                      onClick={() => toggleCategory(id)}
                      className="flex w-full items-center gap-0.5 tracking-wide hover:text-gray-100 text-xs font-title uppercase"
                    >
                      <Icons.Arrow
                        className={`${
                          closedCategories.includes(id) ? "-rotate-90" : ""
                        } w-3 h-3 transition duration-200`}
                      />
                      {label}
                    </button>
                  )}

                  {channelList.map((channel) => {
                    return (
                      <div
                        key={channel.id}
                        className={` ${
                          closedCategories.includes(id) && channel.unread
                            ? "hidden"
                            : ""
                        } space-y-0.5 mt-[5px]`}
                      >
                        <ChannelLink {...channel} />
                      </div>
                    );
                  })}
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="bg-gray-700 flex flex-shrink min-w-0 flex-col flex-1">
        <div className="flex h-12 px-2 items-center shadow-sm">
          <div className="flex items-center">
            <Icons.Hashtag className="mx-2 h-6 w-6 font-semibold text-gray-400" />
            <span className="font-title mr-2 text-white">{channel?.label}</span>
          </div>

          {channel?.description && (
            <>
              <div className="w-px h-6 bg-white/[.06] mx-2" />
              <div className="text-sm truncate font-normal text-gray-200 mx-2">
                {channel.description}
              </div>
            </>
          )}

          <div className="ml-auto flex items-center">
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.HashtagWithSpeechBubble className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Bell className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Pin className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.People className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Inbox className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.QuestionCircle className="mx-2 h-6 w-6" />
            </button>
          </div>
        </div>

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

const ChannelLink = ({
  icon,
  id,
  unread,
  label,
}: ChannelType): ReactElement => {
  const { state } = useLocation();

  let Icon = icon ? Icons[icon] : Icons.Hashtag;

  const active = state.channel === id;

  const channelState = active
    ? "active"
    : unread
    ? "inactiveUnread"
    : "inactiveRead";

  let classes = {
    active: "text-white bg-gray-550/[.32]",
    inactiveUnread:
      "text-white hover:text-gray-100 active:bg-gray-550/[.24] hover:bg-gray-550/[0.16]",
    inactiveRead:
      "text-gray-300 hover:text-gray-100 active:bg-gray-550/[.24] hover:bg-gray-550/[0.16]",
  };

  return (
    <Link
      state={{ server: state.server, channel: id }}
      to={`/servers/${state.server}/channels/${id}`}
    >
      <div
        className={`${classes[channelState]} relative flex group cursor-pointer select-none gap-1.5 rounded items-center py-1 px-2 mx-2 `}
      >
        {channelState === "inactiveUnread" && (
          <div className="absolute bg-white rounded-r-full -left-2.5 w-1 h-2" />
        )}
        <Icon className="w-5 h-5 text-gray-400" />
        {label}
        <Icons.AddPerson className="w-4 h-4 ml-auto text-gray-200 hover:text-gray-100 opacity-0 group-hover:opacity-100" />
      </div>
    </Link>
  );
};
