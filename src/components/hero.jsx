function Hero() {
  return (
    <section className="hero">

      <div className="hero-img">
        <img
          src="/upi.png"
          alt="fintech"
        />
      </div>

      <div className="hero-text">

        <h1>
          Full-Stack Fintech,
          <br/>
          Our Technology
          <br/>
          Building the Future.
        </h1>

        <p>
          The fastest platform to set up onboarding,
          payment processing or other finance journeys.
        </p>

        <button className="learn-btn">
          Learn More
        </button>

      </div>

    </section>
  );
}

export default Hero;