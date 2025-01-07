import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const Home = () => {
  return (
    <>
      <header className="header">
        <img src="assets/shared/desktop/logo.svg" className="logo" />

        <nav className="navbar navbar-expand-lg bg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link invite-btn" href="#">
                    get an invite
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <nav>
          <ul className="navbar">
            <li>
              <a>Stories</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
          </ul>
        </nav> */}
        {/* <button className="invite-btn">get an invite</button> */}
      </header>
      <section className="grid first-section ">
        <div className="col-lg-5 col-12 p-1">
          <div className="design-line"></div>
          <div>
            <h1>CREATE AND SHARE YOUR PHOTO STORIES.</h1>
            <p>
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
            <div className="arrow-div">
              <p className="get-invite">get an invite</p>
              <img
                className="arrow"
                src="assets/shared/desktop/arrow-white.svg"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-12 image-1">
          <img src="assets/home/desktop/create-and-share.jpg" />
        </div>
      </section>
      <section className="grid second-section">
        <div className="col-lg-7 col-12 image-2">
          <img src="assets/home/desktop/beautiful-stories.jpg" />
        </div>
        <div className="col-lg-5 col-12 p-2">
          <h1>BEAUTIFUL STORIES EVERY TIME</h1>
          <p>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <div className="arrow-div">
            <p className="view-stories">VIEW THE STORIES</p>
            <img
              className="arrow"
              src="assets/shared/desktop/arrow-black.svg"
            />
          </div>
        </div>
      </section>
      <section className="grid third-section">
        <div className="col-lg-5 col-12 p-3">
          <h1>DESIGNED FOR EVERYONE</h1>
          <p>
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>
          <div className="arrow-div">
            <p className="view-stories">view the stories</p>
            <img
              className="arrow"
              src="assets/shared/desktop/arrow-black.svg"
            />
          </div>
        </div>
        <div className="col-lg-7 col-12 image-3">
          <img src="assets/home/desktop/designed-for-everyone.jpg" />
        </div>
      </section>
      <section className=" card-section">
        <div className="col-lg-4 col-12 mountain card">
          <div className="card-content">
            <p className="card-title">the mountains</p>
            <p className="creator">by John Applessed</p>
            <div className="line"></div>
            <button>read story</button>
          </div>
        </div>
        <div className="col-lg-4 col-12 sunset card">
          <div className="card-content">
            <p className="card-title">sunset cityscapes</p>
            <p className="creator">by Benjamin Cruz</p>
            <div className="line"></div>
            <button>read story</button>
          </div>
        </div>
        <div className="col-lg-4 col-12 voyage card">
          <div className="card-content">
            <p className="card-title">18 days voyage</p>
            <p className="creator">by Alexei Borodin</p>
            <div className="line"></div>
            <button>read story</button>
          </div>
        </div>
        <div className="col-lg-4 col-12 architecturals card">
          <div className="card-content">
            <p className="card-title">architecturals</p>
            <p className="creator">by Samantha Brooke</p>
            <div className="line"></div>
            <button>read story</button>
          </div>
        </div>
      </section>
      <section className="fourth-section">
        <div className="grid-container">
          <div className="col-lg-3 col-12 responsive">
            <img src="assets/features/desktop/responsive.svg" />
            <h2>100% Responsive</h2>
            <p>
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </div>
          <div className="col-lg-3 col-12 responsive">
            <img src="assets/features/desktop/no-limit.svg" className="limit" />
            <h2>No Photo Upload Limit</h2>
            <p>
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </p>
          </div>
          <div className="col-lg-3 col-12 responsive">
            <img src="assets/features/desktop/embed.svg" />
            <h2>Available to Embed</h2>
            <p>
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.
            </p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="left">
          <img src="dist/logo-white.dd054a1d.svg" className="logo" />
          <div className="social">
            <img src="dist/facebook-white.a7c231ce.svg" className="facebook" />
            <img src="dist/youtube-white.19d5a2d2.svg" className="youtube" />
            <img src="dist/twitter-white.0b5896ff.svg" className="twitter" />
            <img
              src="dist/pinterest-white.e0d2ff16.svg"
              className="pinterest"
            />

            <img
              src="dist/instagram-white.da04bdba.svg"
              className="instagram"
            />
          </div>
        </div>

        <ul className="pages">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Stories</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
        </ul>
        <div className="copyright">
          <div className="arrow-div">
            <p className="get-invite">get an invite</p>
            <img
              className="arrow"
              src="assets/shared/desktop/arrow-white.svg"
            />
          </div>
          <p>Copyright 2019. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
