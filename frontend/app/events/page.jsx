import EventsCard from "@components/events/EventsCard";
import { Router } from "next/navigation";

const page = () => {
  
  const events = [
    {
      imgUrl:
        "https://assets.api.uizard.io/api/cdn/stream/069acef1-7640-415c-aff8-392f030924e2.png",
      dateTime: "2022/03/01 08:00",
      location: "Baker Street",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam similique iure at a veniam rerum",
    },
    {
      imgUrl:
        "https://assets.api.uizard.io/api/cdn/stream/08797d88-1015-46a9-a1c8-772f120c4a7c.png",
      dateTime: "2022/03/01 08:00",
      location: "Baker Street",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam similique iure at a veniam rerum",
    },
    {
      imgUrl:
        "https://assets.api.uizard.io/api/cdn/stream/e5697ee3-882a-4125-a421-b977a1bd0da0.png",
      dateTime: "2022/03/01 08:00",
      location: "USA",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam similique iure at a veniam rerum",
    },
    {
      imgUrl:
        "https://assets.api.uizard.io/api/cdn/stream/2f9a2e3d-294e-43db-93e6-817cc565d1e7.png",
      dateTime: "2022/03/01 08:00",
      location: "New York",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam similique iure at a veniam rerum",
    },
    {
      imgUrl:
        "https://assets.api.uizard.io/api/cdn/stream/40de7b48-bbd7-4c35-acb7-1b7c8a7971e8.png",
      dateTime: "2022/03/01 08:00",
      location: "Paris",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam similique iure at a veniam rerum",
    },
    {
      imgUrl:
        "https://assets.api.uizard.io/api/cdn/stream/069acef1-7640-415c-aff8-392f030924e2.png",
      dateTime: "2022/03/01 08:00",
      location: "Kiev",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam similique iure at a veniam rerum",
    },
  ];

  return (
    <div>
      <div className="events_header h-48 flex font-roboto text-yellow-400 text-5xl font-bold items-center">
        <p className="px-10 translate-x-10">EVENTS</p>
      </div>

      <div className="bg-white min-h-screen flex flex-col text-black items-center">
        {events.map((event, index) => {
          return (
            <div key={index} className="w-3/4">
              <EventsCard
                img={event.imgUrl}
                dateTime={event.dateTime}
                location={event.location}
                title={event.title}
                content={event.content}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
