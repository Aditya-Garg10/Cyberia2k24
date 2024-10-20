/* eslint-disable react/prop-types */

function TeamMemebers({ membersDetail }) {
    const { title, heads } = membersDetail;
  
    const card = heads.map((head, idx) => {
      console.log("here", head);
  
      return (
        <div key={idx}>
          <div className="py-4 my-8 grid gap-2 leading-8 w-fit mx-[5rem] bg-[#ffffff20] p-8 rounded-xl  backdrop-blur-lg border border-white border-opacity-30 shadow-sm ">
          <img
              src={head.img}
              alt={head.userName}
              className="rounded-xl w-[250px] h-[250px]"
            />
            <div className="grid justify-center text-center">
              <p className="text-xl">{head.userName}</p>
              <p className="text-gray-300">{head.teamName}</p>
            </div>
          </div>
        </div>
      );
    });
    console.log(title);
  
    return (
      <>
        <main>
          <div>
            <h2 className="m-4 text-center text-5xl p-5">{title}</h2>
            <div className="flex flex-wrap justify-center">{card}</div>
          </div>
        </main>
      </>
    );
  }
  
  export default TeamMemebers;
  