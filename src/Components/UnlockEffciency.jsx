import { Link } from "react-router-dom";

const UnlockEfficiency = () => {
  return (
    <section className="paddingtop paddingbottom text-white bg-gradient-to-r from-primary/30 to-secondary/30">
      <div
        data-aos="fade-up"
        data-aos-offset="-700"
        className="wrapper flex flex-col text-white items-center gap-5 text-center"
      >
        <div className="gradient-rounded-text-box">Unlock Efficiency</div>
        <h2 className="main-heading">Drive Innovation with Our IT Services</h2>
        <p className="desc max-w-[40rem] text-center">
          Empowering businesses to not just survive but to thrive and grow in
          the fast-paced, competitive digital landscape.
        </p>
        <Link to={"#"} className="primary-btn mt-3 !rounded-lg">
          Book Consultation Call
        </Link>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
