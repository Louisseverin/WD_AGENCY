import React from "react";

const Home = () => {
  return (
    <>
      <div className="all-info">
        <nav>
          <div className="row">
            <img
              src="https://wd-graphics.com/wp-content/uploads/2023/03/wd-graphics-logo-white.png"
              className="logo"
            />
            <ul className="main-nav">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/About">About Us</a>
              </li>
              <li>
                <a href="/SignIn">Subscribe</a>
              </li>
            </ul>
          </div>
        </nav>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Subscribe For Our Packages</h1>

            <h2 className="hero-subtitle">
              Our website management agency is your trusted partner for
              maintaining and enhancing your online presence. We offer services
              such as maintenance, content management, SEO, security, and more,
              so you can focus on your core business while we keep your website
              running smoothly.!
            </h2>
            <a href="/SignIn">
              <button
                type="button"
                className="hero-button"
                onclick="location.href='tours.html'"
              >
                Subscribe &raquo;
              </button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
