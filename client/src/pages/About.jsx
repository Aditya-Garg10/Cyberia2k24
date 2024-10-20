import HariBhai from "../assets/HariBhai.png";
import V_K_Srivastava from "../assets/V_K_Shrivastava.png";
import P_K_Mehta from "../assets/P_K_Mehta.jpeg"

function About() {
  return (
    <div className="z-1000 bg-[url('./assets/AboutPage_Bg_Blurred.jpg')] bg-fixed bg-no-repeat bg-cover">
    <section className="text-white py-[5rem] flex flex-col items-center justify-center text-justify px-6 md:px-10 lg:px-20">
      <header className="mb-[5rem] mt-[2.5rem] bg-[#ffffff20]  backdrop-blur-lg border border-white border-opacity-30 shadow-lg rounded-xl p-6 w-full">
        <div className="logo-font-face text-4xl md:text-5xl lg:text-6xl text-center">CYBERIA</div>
      </header>
      <div className="bg-[#ffffff20]  backdrop-blur-lg border border-white border-opacity-30 shadow-lg rounded-xl p-6 w-full">
        <main className="grid gap-10 mb-20">
          <div className="leading-8">
            <h2 className="font-semibold text-lg md:text-xl mb-5">About Cyberia</h2>
            <p>
              Cyberia implies an arena which has the cyber-world at its core.
              Cyberia provides an arena for the youth of today and serve as a
              platform to exhibit their technical acumen to the world and
              compete with like-minded peers.
            </p>
          </div>
          <div className="leading-8">
            <h2 className="font-semibold text-lg md:text-xl mb-5">
              About the Department of Computer Applications
            </h2>
            <p>
              At The Maharaja Sayajirao University of Baroda, the Department
              of Computer Applications offers a transformative Bachelor of
              Computer Applications (BCA) & Master of Science (Information
              Technology) (MSc. IT) programs. Seamlessly integrating theory
              with hands-on experience, the department's expert faculty
              guides. By forging strong industry connections, including
              internships and guest lectures, the department ensures students
              are equipped not just to navigate the tech landscape, but to
              shape its future with innovation.
            </p>
          </div>
        </main>
      </div>
        <footer className="flex justify-between w-full mt-10 flex-wrap lg:justify-center lg:gap-5">
          <div className="bg-[#ffffff20] bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 shadow-lg rounded-xl p-6 mt-10 leading-8">
            <h2 className="font-bold text-lg">Cyberia Head Personal</h2>
            <div className="grid gap-2">
              <a>Prof. Prashant K. Mehta</a>
              <p className="text-gray-400">(HOD) Dept. Computer Application</p>
              <img
                src={P_K_Mehta}
                className="w-[300px] h-[300px] shadow-sm rounded-xl mt-4"
              />
            </div>
          </div>
          <div className="bg-[#ffffff20] bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 shadow-lg rounded-xl p-6 mt-10 leading-8">
            <h2 className="font-bold text-lg">Patron</h2>
            <div className="grid gap-2">
              <a>Prof. Haribhai Kataria</a>
              <p className="text-gray-400">(Dean) Faculty Of Science</p>
              <img
                src={HariBhai}
                className="w-[300px] h-[300px] shadow-sm rounded-xl mt-4"
              />
            </div>
          </div>
          <div className="bg-[#ffffff20] bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 shadow-lg rounded-xl p-6 mt-10 leading-8">
            <h2 className="font-bold text-lg">Cyberia Organizing Committee</h2>
            <div className="grid gap-2">
              <a>Prof. Vijay Kumar Srivastava</a>
              <p className="text-gray-400">Vice Chancellor</p>
              <img
                src={V_K_Srivastava}
                className="w-[300px] h-[300px] shadow-sm rounded-xl mt-4"
              />
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default About;
