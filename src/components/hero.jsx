import { useState, useRef, useEffect } from "react";
import img4 from "../../images/upi_4.jpg";
import img5 from "../../images/upi_5.jpg";
import img6 from "../../images/upi_6.jpg";
import img7 from "../../images/upi_7.jpg";
import empowerImg from "../../images/upi_8.jpg"; // swap with your actual empower image

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

const industries = [
  { title: "Hi-tech Engineering Services",   image: img4, overlay: "rgba(30, 60, 160, 0.45)" },
  { title: "Banking and Financial Services",  image: img5, overlay: "rgba(160, 90, 30, 0.45)" },
  { title: "Mobile Application Development", image: img6, overlay: "rgba(30, 100, 160, 0.35)" },
  { title: "Web Development & Design",        image: img7, overlay: "rgba(100, 120, 150, 0.35)" },
];

function IndustryCard({ title, image, overlay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="industry-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
        boxShadow: hovered
          ? "0 16px 40px rgba(0,0,0,0.22)"
          : "0 4px 16px rgba(0,0,0,0.10)",
      }}
    >
      <img src={image} alt={title} className="industry-card-img" />
      <div className="industry-card-overlay" style={{ background: overlay }} />
      {hovered && <div className="industry-card-hover-overlay" />}
      <div className="industry-card-title">{title}</div>
    </div>
  );
}

function Industries() {
  return (
    <section className="industries-section">
      <div className="industries-inner">
        <div className="industries-left">
          <h2 className="industries-heading">Industries</h2>
        </div>
        <div className="industries-right">
          <p className="industries-desc">
            We work with industries that touch lives daily and bring change to the
            world: Banking and Financial Services, Mobile Application Development,
            Web Development &amp; Design, Hi-tech Engineering Services, Cloud
            Solutions and IT Support &amp; Managed Services
          </p>
        </div>
      </div>
      <div className="industries-cards">
        {industries.map((ind, i) => (
          <IndustryCard key={i} {...ind} />
        ))}
      </div>
    </section>
  );
}

function Empower() {
  return (
    <section className="empower-section">
      <div className="empower-left">
        <h2 className="empower-heading">
          Empowering your business with lightning fast solutions
        </h2>
        <p className="empower-desc">
          We provide a range of IT solutions, including Website Hosting, ERP, and
          more, empowering you to enhance productivity and efficiency in your work.
        </p>
        <a href="#services" className="empower-btn">
          Services <span className="empower-arrow">→</span>
        </a>
      </div>
      <div className="empower-right">
        <img src={empowerImg} alt="Empowering business" className="empower-img" />
      </div>
    </section>
  );
}

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
    <>
      {/* Slider */}
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

      {/* Industries */}
      <Industries />

      {/* Empower */}
      <Empower />
    </>
  );
}

export default Hero;