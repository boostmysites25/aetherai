import CallToAction from "../Components/CallToAction";
import ClientsLogoSlider from "../Components/ClientLogoSlider";
import GetInTouch from "../Components/GetInTouch";
// import LogoSlider from "../Components/LogoSlider";
import RequirementForm from "../Components/RequirementForm";
import ServicesList from "../Components/ServicesList";
import Testimonials from "../Components/Testimonials";
import UnlockEfficiency from "../Components/UnlockEffciency";
import WhyChooseUs from "../Components/WhyChooseUs";
import WorkProcess from "../Components/WorkProcess";
// import BestServicesSlider from "./HomePageSection/BestServicesSlider";
import HomepageBanner from "./HomePageSection/HomepageBanner";
import IndustriesWeServe from "./HomePageSection/IndustriesWeServe";
import SinglePortfolio from "../Components/SinglePortfolio";
import { webPortfolio, appPortfolio } from "../contant";

const HomePage = () => {
  return (
    <div>
      <HomepageBanner />
      <div
        data-aos="fade-up"
        data-aos-offset="-700"
        className=" lg:hidden flex wrapper pt-[5rem]"
      >
        <RequirementForm />
      </div>
      <div data-aos="fade-up" data-aos-offset="-700" className="paddingtop">
        <ClientsLogoSlider hide={true} />
      </div>
      {/* <LogoSlider /> */}
      <ServicesList />
      <WhyChooseUs />
      <UnlockEfficiency />
      <WorkProcess />
      <IndustriesWeServe />
      
      {/* Portfolio Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-[5rem] px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div 
              data-aos="fade-up"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-blue-400/20 border border-primary/30 mb-6"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Work</span>
            </div>
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Featured <span className="bg-gradient-to-r from-blue-400 to-primary bg-clip-text text-transparent">Projects</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Discover our innovative solutions that have transformed businesses across industries. 
              From cutting-edge web applications to powerful mobile experiences.
            </p>
          </div>
          
          {/* Web Development Portfolio */}
          <div className="mb-20">
            <div className="mb-8">
              <h2
                data-aos="fade-up"
                className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3"
              >
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-blue-400 rounded-full"></div>
                Web Development Excellence
              </h2>
              <p
                data-aos="fade-up"
                className="text-gray-400 text-lg max-w-2xl"
              >
                Responsive, scalable, and user-centric web solutions that drive business growth.
              </p>
            </div>
            <SinglePortfolio
              porfolio={webPortfolio}
              portfoliofor=""
              isDark={true}
              isModern={true}
            />
          </div>
          
          {/* App Development Portfolio */}
          <div>
            <div className="mb-8">
              <h2
                data-aos="fade-up"
                className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3"
              >
                <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-primary rounded-full"></div>
                Mobile App Innovation
              </h2>
              <p
                data-aos="fade-up"
                className="text-gray-400 text-lg max-w-2xl"
              >
                Native and cross-platform applications that deliver exceptional user experiences.
              </p>
            </div>
            <SinglePortfolio
              porfolio={appPortfolio}
              portfoliofor=""
              isDark={true}
              isModern={true}
            />
          </div>
        </div>
      </div>
      
      <CallToAction />
      {/* <BestServicesSlider /> */}
      <Testimonials />
      <ClientsLogoSlider />
      <GetInTouch />
    </div>
  );
};

export default HomePage;
