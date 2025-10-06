// import { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";
import whyChooseUsIcon1 from "../assets/ph_target-light.png";
import whyChooseUsIcon2 from "../assets/mage_light-bulb.png";
import whyChooseUsIcon3 from "../assets/tdesign_user-talk.png";
import whyChooseUsIcon4 from "../assets/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "../assets/whychooseus-png.png";
import TrustWorthySection from "./TrustWorthySection";
const WhyChooseUs = () => {
  return (
    <section className="paddingtop paddingbottom bg-gradient-to-r from-secondary/30 to-primary/30">
      <div className="wrapper text-center text-white flex flex-col gap-7">
        <div
          data-aos="fade-up"
          data-aos-offset="-700"
          className="gradient-rounded-text-box mx-auto"
        >
          Why Choose Us
        </div>
        <div className="flex flex-col gap-5">
          <h2
            data-aos="fade-up"
            data-aos-offset="-700"
            className="main-heading"
          >
            Magic Behind Our IT Solutions
          </h2>
          <p
            data-aos="fade-up"
            data-aos-offset="-700"
            className="desc max-w-[40rem] mx-auto"
          >
            We begin by conducting a comprehensive needs assessment to
            <br />
            understand your specific requirements, challenges, and goals.
          </p>
          <div
            data-aos="fade-up"
            data-aos-offset="-700"
            className="w-full block lg:hidden"
          >
            <img
              src={whyChooseUsPng}
              className="object-contain max-h-[20rem] mx-auto"
              alt="why choose us"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-5 mt-9">
            <div className="flex flex-col gap-5 h-full">
              <div
                data-aos="fade-right"
                data-aos-offset="-700"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl">Technical Expertise</h5>
                  <img
                    src={whyChooseUsIcon1}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-white text-start mt-3">
                  A reputable IT company should possess a high level of
                  technical expertise.
                </p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="-700"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl">Innovation & Adaptability</h5>
                  <img
                    src={whyChooseUsIcon2}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-white text-start mt-3">
                  A reputable IT company should possess a high level of
                  technical expertise.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="-700"
              className="w-full lg:block hidden"
            >
              <img
                src={whyChooseUsPng}
                className="object-contain max-h-[25rem] mx-auto"
                alt="why choose us"
              />
            </div>
            <div className="flex flex-col gap-5 h-full">
              <div
                data-aos="fade-left"
                data-aos-offset="-700"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl">Effective Communication</h5>
                  <img
                    src={whyChooseUsIcon3}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-white text-start mt-3">
                  A reputable IT company should possess a high level of
                  technical expertise.
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="-700"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl">Security and Compliance</h5>
                  <img
                    src={whyChooseUsIcon4}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-white text-start mt-3">
                  An IT company must prioritize cybersecurity and data
                  protection.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <TrustWorthySection />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
