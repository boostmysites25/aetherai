import { appDevelopmentServices, webDevelopmentServices } from "../../contant";
// eslint-disable-next-line
const LandingServices = ({ page }) => {
  const services =
    page === "web-development"
      ? webDevelopmentServices
      : appDevelopmentServices;
  return (
    <div id="services" className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-[5rem] px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our {page === "web-development" ? "Web" : "App"} Development Services
            </span>
          </div>
          <h1 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {page === "web-development" ? "Web Development" : "App Development"} <span className="bg-gradient-to-r from-blue-400 to-primary bg-clip-text text-transparent">Services</span>
          </h1>
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            {page === "web-development" &&
              "High-performance web development services designed to create secure, scalable, and user-friendly websites that enhance your business's digital presence."}
            {page === "app-development" &&
              "High-performance app development services designed to deliver secure, scalable, and user-friendly applications that elevate your business's digital reach and engage your audience."}
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-primary/50 rounded-2xl shadow-2xl hover:shadow-primary/20 p-8 h-full">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Section */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-brflex items-center justify-center from-primary/30 to-blue-400/30 transition-all duration-300">
                        <img
                          src={item?.icon}
                          alt=""
                          className="w-10 h-10 filter grayscale-0 transition-all duration-300"
                        />
                      </div>
                      {/* Icon Glow */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-400/20 opacity-100 transition-opacity duration-300 blur-sm"></div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {item.description}
                  </p>
                  
                  
                </div>
                
                {/* Border Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-blue-400/20 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingServices;
