import HariBhai from "../assets/HariBhai.png";
import V_K_Srivastava from "../assets/V_K_Shrivastava.png";


// bg-[url("./assets/Cyb.jpg")
function About() {
  return (
    <div className="z-1000 bg-[url('./assets/AboutPage_Bg_Blurred.jpg')] bg-blend-multiply bg-[#00000095] bg-fixed bg-no-repeat bg-cover">
      <section className="text-white py-[10rem] flex flex-col items-center justify-center text-justify px-[10rem] ">
        <header className="mb-[5rem]">
          <div className="logo-font-face font-spaceAgeFont text-6xl">CYBERIA</div>
        </header>
        <main className="grid gap-10 mb-20">
          <div className="leading-8">
            <h2 className="font-semibold text-xl mb-5">About Cyberia</h2>
            <p>
              Cyberia implies an arena which has the cyber-world at its core.
              Cyberia provides an arena for the youth of today and serve as a
              platform to exhibit their technical acumen to the world and
              compete with like-minded peers.
            </p>
          </div>
          <div className="leading-8">
            <h2 className="font-semibold text-xl mb-5">
              About the Department of Computer Applications
            </h2>
            <p>
              At The Maharaja Sayajirao University of Baroda, the Department of
              Computer Applications offers a transformative Bachelor of Computer
              Applications (BCA) & Master of Science (Information Technology)
              (MSc. IT) programs. Seamlessly integrating theory with hands-on
              experience, the department's expert faculty guides. By forging
              strong industry connections, including internships and guest
              lectures, the department ensures students are equipped not just to
              navigate the tech landscape, but to shape its future with
              innovation.
            </p>
          </div>
        </main>
        <footer className="flex justify-between w-full">
          <div>
            <h2  className="font-bold text-lg">Cyberia Organizing Committee</h2>
            <div className="grid gap-2">
              <h3 className="mt-2">Patron</h3>
              <a>Prof. Vijay Kumar Srivastava</a>
              <p className="text-gray-400">Vice Chancellor</p>
              <img src={V_K_Srivastava} className="w-[300px] h-[300px] rounded-full mt-4"/>
            </div>
          </div>
          <div>
            <h2  className="font-bold text-lg">Patron</h2>
            <div className="grid gap-2">
              <h3 className="mt-2">Program Convener</h3>
              <a>Prof. Haribhai Kataria</a>
              <p className="text-gray-400">(Dean) Faculty Of Science</p>
              <img src={HariBhai} className="w-[300px] h-[300px] rounded-full mt-4"></img>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default About;
