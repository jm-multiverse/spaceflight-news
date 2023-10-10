import styles from "../style";
import { Link } from "react-router-dom";
import { whiteSatelliteOutline } from "../assets/icons";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const CustomNav = () => (
  <header className='text-slate-50 bg-translucent-black font-poppins padding-x py-3 z-10 w-full'>
    <nav className='flex justify-between items-center max-container'>
      <Link className='flex justify-between items-center group' href="/">
        <img
          className="w-12 h-12 sm:w-16 sm:h-16 group-hover:animate-ping transition-all"
          src={whiteSatelliteOutline}
          alt="Logo"
        />
        <h1 className='sm:text-xl px-4'>Spaceflight News</h1>
      </Link>
      <ul className="flex-1 flex justify-end items-center gap-8 me-8 max-lg:hidden">
        {navLinks.map((item) => (
          <li key={item.label}>
            <Link to={item.href} className='leading-normal text-md text-slate-gray border-b-2 border-b-transparent hover:border-b-slate-600'>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className='flex text-lg leading-normal font-medium max-lg:hidden wide:mr-24'>
        <a href='/'>Subscribe</a>
      </div>
      <div className='hidden max-lg:block'>
        <img src={hamburger} alt='hamburger icon' width={25} height={25} />
      </div>
    </nav>
  </header>
)

const Hero = () => {
  return (
    <>
      <div className={`bg-hero`}>
        <div className={`h-screen w-screen `}>
          <CustomNav />
          <section
            id="home"
            className={`flex md:flex-row flex-col items-center h-full w-full bg-translucent-black-sm ${styles.paddingX}`}
          >
            <div className={`flex-1 ${styles.flexStart} flex-col sm:px-16 p-6 rounded`}>
              <div className=" flex flex-row justify-between items-center w-full">
                <h1 className="text-whiteflex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-transparent ss:leading-[100.8px] leading-[75px]">
                  <span className="text-white text-drop-shadow">
                    A New<br className="sm:block hidden" />{" "}
                  </span>
                  <span className="text-purple-gradient-2 text-drop-shadow">Point In History</span>{" "}
                </h1>
                <div className="ss:flex hidden md:mr-4 mr-0">
                  Get Started
                </div>
              </div>

              <h1 className="text-white text-drop-shadow font-poppins font-semibold ss:text-[68px] text-[52px] text-transparent ss:leading-[100.8px] leading-[75px] w-full">
                For Spaceflight
              </h1>
              <div className="flex flex-col bg-translucent-black-sm">

                <p className={`${styles.paragraph} max-w-[670px] mt-5 sm:p-3 p-5 rounded-md`}>
                  Our mission is to provide a news and information service which helps our readers to stay informed about the latest developments in spaceflight.
                </p>

              </div>
            </div>

          </section>
        </div>
      </div>
    </>
  );
};

export default Hero;