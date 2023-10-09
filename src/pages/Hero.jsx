import styles from "../style";

const Hero = () => {
  return (
    <div className={`bg-hero ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
          <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                A New<br className="sm:block hidden" />{" "}
                <span className="text-purple-gradient">Point In History</span>{" "}
              </h1>
              <div className="ss:flex hidden md:mr-4 mr-0">
                Get Started
              </div>
            </div>

            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
              For Spaceflight
              {/* Placeholder */}
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Our mission is to provide a news and information service which helps our readers to stay informed about the latest developments in spaceflight.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;