/* eslint-disable react/prop-types */
import profileSkeley from "../assets/profilePicSkeley.jpg";
import EventMemebers from "../components/TeamMembers/EventMembers";
import TeamMemebers from "../components/TeamMembers/TeamMembers";

function Team() {
  const eventHead = {
    teamHeads: {
      title: "Team Heads",
      heads: [
        {
          userName: "Adi",
          img: profileSkeley,
          teamName: "Web Team",
        },
        {
          userName: "Adi_2",
          img: profileSkeley,
          teamName: "Robotics Team",
        },
      ],
    },
    eventHeads: {
      title: "Event Heads",
      heads: [
        {
          userName: "Om",
          img: profileSkeley,
          teamName: "Hackathon Team",
        },
        {
          userName: "Om_2",
          img: profileSkeley,
          teamName: "Gaming Team",
        },
      ],
    },
  };

  return (
    <section className="bg-[#d37661] text-white">
      <header>
        <div
          className={`bg-[url("./assets/Team_Page_bg.jpeg")] h-screen w-full bg-no-repeat bg-cover flex justify-center items-center`}
        >
          <h1 className="logo-font-face text-white text-6xl hover:text-7xl ease-in-out duration-300 cursor-pointer">
            CYBERIA
          </h1>
        </div>
      </header>
      <EventMemebers membersDetail={eventHead.eventHeads} />
      <TeamMemebers membersDetail={eventHead.teamHeads} />
    </section>
  );
}
export default Team;
