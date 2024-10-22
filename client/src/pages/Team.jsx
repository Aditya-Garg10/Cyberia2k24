/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
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
    <section className="bg-[url('./assets/registeration.jpg')]  text-white  bg-blend-multiply bg-[#0000008c] bg-fixed bg-no-repeat h-full bg-cover">
      <header>
        <div
          className={` h-screen w-full bg-no-repeat bg-cover flex justify-center items-center`}
        >
          <h1 className="logo-font-face text-white text-6xl hover:text-7xl ease-in-out duration-300 cursor-pointer">
            CYBERIA
          <Link><p className='text-wrap sm:w-2/3  text-gray-300  text-end text-[17px] sm:text-xs font-light'>Unleash the Geek Within</p></Link>                          
          </h1>
        </div>
      </header>
      <EventMemebers membersDetail={eventHead.eventHeads} />
      <TeamMemebers membersDetail={eventHead.teamHeads} />
    </section>
  );
}
export default Team;
