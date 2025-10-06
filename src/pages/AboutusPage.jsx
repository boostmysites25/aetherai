import PageBanner from "../Components/PageBanner";
import img1 from "../assets/images/aboutus-1.jpg";
// import img2 from "../assets/images/aboutus-2.png";
// import img3 from "../assets/images/aboutus-3.jpeg";
import sectionthreeimageone from "../assets/images/sectionthreeimageone.gif";
import sectionthreeimagetwo from "../assets/images/sectionthreeimagetwo.jpeg";
import sectionthreeimagethree from "../assets/images/sectionthreeimagethree.png";
import FAQ from "../Components/FAQ";
import Testimonials from "../Components/Testimonials";
import ClientsLogoSlider from "../Components/ClientLogoSlider";
// import CompanyAchievements from "../Components/CompanyAchievements";
import TrustWorthySection from "../Components/TrustWorthySection";
import OurApproach from "../Components/OurApproach";
const AboutusPage = () => {
  return (
    <div>
      <PageBanner title={"About Us"} />
      <section className="paddingtop paddingbottom wrapper grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col text-white">
          <h1 data-aos="fade-right" className="main-heading">
            Empowering Businesses with Innovation and Technology
          </h1>
          <p data-aos="fade-right" className="description mt-4">
            Welcome to Aether AI, where we combine passion, expertise,
            and technology to deliver innovative solutions that help businesses
            thrive in the digital age. As a forward-thinking technology partner,
            we’re committed to empowering organizations of all sizes by solving
            complex problems and unlocking new opportunities. Our goal is
            simple: to turn your vision into reality and drive measurable
            success through customized, cutting-edge digital solutions.
            <br />
            <br /> Founded on a foundation of integrity, creativity, and
            collaboration, we are driven by a strong belief in the
            transformative power of technology. Whether you’re a startup looking
            to disrupt your industry or an established enterprise seeking to
            modernize, we’re here to support your growth with tailored solutions
            that address your unique challenges and objectives.
          </p>
        </div>
        <img
          data-aos="fade-left"
          loading="lazy"
          src={img1}
          alt="about us"
          className="w-full rounded-lg max-h-[55vh]  lg:h-full object-cover"
        />
      </section>
      {/* <CompanyAchievements /> */}
      <TrustWorthySection />

      <div className="flex justify-center w-full">
        <div className="relative flex justify-center z-10 mt-[51px] px-4">
          <img
            src={sectionthreeimageone}
            alt="AI image"
            // className="rounded-2xl w-[70%] h-[50vh] object-top object-cover"
            className="rounded-2xl h-[20rem] sm:h-[50vh] w-full object-top object-cover"
          />
          <img
            src={sectionthreeimagetwo}
            alt="AI image"
            className="absolute -bottom-2 sm:-bottom-[3rem] left-2 md:-left-[1rem] lg:-left-[6.5rem] opacity-75 rounded-2xl w-[6rem] sm:w-[12rem] object-contain aspect-square"
          />
          <img
            src={sectionthreeimagethree}
            alt="AI image"
            className="absolute right-6 md:-right-[1rem] lg:-right-[6rem] top-2 sm:top-12 opacity-95 rounded-2xl w-[8rem] sm:w-[12rem] object-contain"
          />
        </div>
      </div>
      <OurApproach />
      <FAQ />
      <Testimonials />
      <ClientsLogoSlider />
    </div>
  );
};

export default AboutusPage;
