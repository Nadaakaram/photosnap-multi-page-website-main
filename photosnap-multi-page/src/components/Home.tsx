import React from "react";


const Home = () => {
  return (
    <>
      <header className="header">
        <img src="assets/shared/desktop/logo.svg" className="logo" />

        <nav>
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
        </nav>
        <button className="invite-btn">get an invite</button>
      </header>
      <section className="grid first-section ">
        <div className="col-4 p-1">
          <div className="line"></div>
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
        <div className="col-8 image-1">
          <img src="assets/home/desktop/create-and-share.jpg" />
        </div>
      </section>
      <section className="grid second-section">
        <div className="col-8 image-2">
          <img src="assets/home/desktop/beautiful-stories.jpg" />
        </div>
        <div className="col-4 p-2">
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
        <div className="col-4 p-3">
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
        <div className="col-8 image-3">
          <img src="assets/home/desktop/designed-for-everyone.jpg" />
        </div>
      </section>
    </>
  );
};

export default Home;
