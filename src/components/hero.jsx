import { useState, useRef, useEffect } from "react";

const slides = [
  {
    image: "/images/upi_1.png",
    darkBg: true,
    content: (
      <>
        <h1>
          <strong>Full-Stack</strong><br/>
          <strong>Fintech,</strong><br/>
          Our Technology<br/>
          Building the<br/>
          Future.
        </h1>
        <p>The fastest platform to set up on-boarding, payment processing, or other finance journeys..</p>
        <button className="learn-btn">Learn More</button>
      </>
    )
  },
  {
    image: "/images/upi_2.jpg",
    darkBg: false,
    content: (
      <>
        <h1>
          There's <strong>Never A<br/>Dull Moment</strong> In<br/>
          Our Town
        </h1>
        <p>Experience inspiring performances and mesmerizing exhibitions—there's always something exciting ahead!</p>
        <button className="learn-btn orange-btn">Check Out Upcoming News</button>
      </>
    )
  },
  {
    image: "/images/upi_3.jpg",
    darkBg: true,
    content: (
      <>
        <h1>
          Innovating the<br/>
          <strong>Future of<br/>Technology</strong>
        </h1>
        <p>Empowering businesses with cutting-edge solutions for a smarter, more connected world.</p>
        <button className="learn-btn">Explore Our Town</button>
      </>
    )
  }
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef(null);

  const goTo = (index) => {
    if (transitioning || index === current) return;
    clearTimeout(timerRef.current);
    setPrev(current);
    setCurrent(index);
    setTransitioning(true);
    timerRef.current = setTimeout(() => {
      setPrev(null);
      setTransitioning(false);
    }, 700);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 3250);
    return () => clearInterval(timer);
  }, [current, transitioning]);

  const prevSlide = () => goTo((current - 1 + slides.length) % slides.length);
  const nextSlide = () => goTo((current + 1) % slides.length);

  return (
    <section className="hero">

      <div className="hero-img">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.image}
            alt={`slide-${i}`}
            className="hero-img-layer"
            style={{
              opacity: i === current ? 1 : 0,
              zIndex: i === current ? 2 : i === prev ? 1 : 0,
              transition: "opacity 0.7s ease",
            }}
          />
        ))}
      </div>

      <div className="hero-slider-nav">
        <button className="nav-arrow nav-up" onClick={prevSlide}></button>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "dot-active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
        <button className="nav-arrow nav-down" onClick={nextSlide}></button>
      </div>

      <div className="hero-text-wrapper">
        {slides.map((s, i) => (
          <div
            key={i}
            className="hero-text"
            style={{
              opacity: i === current ? 1 : 0,
              transform: i === current ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              position: i === current ? "relative" : "absolute",
              pointerEvents: i === current ? "auto" : "none",
            }}
          >
            {s.content}
          </div>
        ))}
      </div>

    </section>
  );
}

export default Hero;