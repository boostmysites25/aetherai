import {
  FaSearch,
  FaChartLine,
  FaPaintBrush,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const OurApproach = () => {
  const approachSteps = [
    {
      id: 1,
      icon: <FaSearch className="w-6 h-6" />,
      title: "Customer-Centric Philosophy",
      description:
        "At the heart of everything we do is our commitment to our clients. We build strong relationships based on trust, listening closely to your needs and consistently delivering solutions that meet and exceed expectations.",
    },
    {
      id: 2,
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Comprehensive Expertise",
      description:
        "From initial consultation to ongoing support, we offer a full spectrum of services. Whether it’s designing a new website, implementing cloud infrastructure, or developing custom software, we ensure that every project is handled with care and attention to detail.",
    },
    {
      id: 3,
      icon: <FaPaintBrush className="w-6 h-6" />,
      title: "Cutting-Edge Innovation",
      description:
        "We’re always looking for the next big thing, staying up-to-date with the latest technologies and trends. By embracing innovation, we ensure that our solutions are future-proof and give you a competitive edge in your industry.",
    },
    {
      id: 4,
      icon: <FaRocket className="w-6 h-6" />,
      title: "Industry-Specific Insights",
      description:
        "With experience across various sectors including healthcare, finance, retail, and manufacturing, we understand the unique challenges and opportunities within each industry. This expertise allows us to craft solutions that are not only effective but also aligned with the specific demands of your sector.",
    },
    {
      id: 5,
      icon: <FaHeadset className="w-6 h-6" />,
      title: "Quality and Transparency",
      description:
        "We believe in transparency at every stage of the project. From project timelines to budget management, we keep you informed and involved, ensuring that there are no surprises along the way. Above all, we’re committed to delivering quality solutions that provide real business value.",
    },
  ];

  return (
    <section className="paddingtop paddingbottom bg-black">
      <div className="wrapper paddingtop">
        <div className="text-center mb-12">
          <h2 data-aos="fade-up" className="main-heading text-gray-900 mb-4">
            Our Approach
          </h2>
          <p
            data-aos="fade-up"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We believe the best digital solutions come from strategic thinking
            and collaborative execution.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {approachSteps.map((step) => (
            <div
              data-aos="fade-up"
              key={step.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600">{step.icon}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              {/* <div className="mt-4 text-blue-600 font-medium">{`0${
                index + 1
              }`}</div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
