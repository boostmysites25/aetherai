import { useLocation } from "react-router-dom";
import img1 from "../../assets/services-details/web-development1.jpg";
import img2 from "../../assets/services-details/web-development2.jpg";

const ServiceDetailsPage = () => {
  // const webDevelopmentServices = [
  //   {
  //     title: "Custom Web Development",
  //     description:
  //       "We specialize in building unique, tailor-made websites that reflect your brand identity and meet your business objectives.",
  //   },
  //   {
  //     title: "Mobile-Responsive Design",
  //     description:
  //       "We ensure your website adapts beautifully across all devices, ensuring users have a consistent and optimized experience whether they’re on mobile, tablet, or desktop.",
  //   },
  //   {
  //     title: "E-Commerce Development",
  //     description:
  //       "If you want to take your business online, we offer powerful e-commerce solutions designed to handle high traffic, provide secure payment options, and enhance the shopping experience.",
  //   },
  //   {
  //     title: "Content Management Systems (CMS)",
  //     description:
  //       "We empower you to take control of your content with an easy-to-use CMS, giving you the flexibility to update and manage your site independently.",
  //   },
  //   {
  //     title: "Search Engine Optimization (SEO)",
  //     description:
  //       "Our websites are built with SEO in mind, improving your visibility on search engines and helping you reach more customers.",
  //   },
  // ];

  const { pathname, state } = useLocation();
  console.log(state, pathname, "hi");
  const services = state.serviceData;

  return (
    <div className="flex flex-col gap-10 text-white">
      <img
        src={services.img}
        loading="lazy"
        className="max-w-[25rem] max-h-[25rem] aspect-square object-cover rounded-3xl object-center"
        alt="web and app development"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 className="text-3xl font-semibold">{services.title}</h2>
        <h3 className="text-xl font-medium mt-2">
          Aether AI - Crafting Digital Experiences
        </h3>

        <p className="description">{services.description}</p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 className="text-3xl font-semibold">
          Our {services.title} Services
        </h2>
        <p className="description">
          We specialize in creating websites that not only look stunning but
          also deliver exceptional functionality and performance. Our services
          are designed to help your business stand out in the digital landscape.
        </p>
        {/* <img
          src={services.img}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="web development"
        /> */}
        <p className="description">
          {services?.services?.map((service, index) => (
            <div key={index}>
              <strong>{service.heading}:</strong> {service.description}
              {index !== services.length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
