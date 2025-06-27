import "./SrBanner.css";

const SrBanner = () => {
  return (
    <div>
      <section className="banner">
        <h1>
          Welcome to Batcave
        </h1>
        <p>
          “AN BATCAVE AUTOMOTIVE CLUB FOR PASSIONATE CAR ENTHUSIASTS
          <br />
          THROUGH THRILLING EVENTS , EXCULSIVE CONTENT “
        </p>
        <button
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1600">
          Join Community
        </button>
      </section>
    </div>
  );
};

export default SrBanner;
