import "./SrBanner.css";

const SrBanner = () => {
  return (
    <div>
      <section className="banner" data-aos="zoom-out" data-aos-duration="1500">
        <h1 data-aos="zoom-in-up" data-aos-duration="1800">
          Welcome to Batcave
        </h1>
        <p data-aos="zoom-out" data-aos-duration="1700">
          “AN BATCAVE AUTOMOTIVE CLUB FOR PASSIONATE CAR ENTHUSIASTS
          <br />
          THROUGH THRILLING EVENTS , EXCULSIVE CONTENT “
        </p>
        <button
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1600"
        >
          Join Community
        </button>
      </section>
    </div>
  );
};

export default SrBanner;
