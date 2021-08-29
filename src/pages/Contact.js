import React from 'react';

import classes from './Contact.module.css';

function Contact() {
  return (
    <div className={classes.contact_section}>
      <div className={classes.personal}>
        <img src="https://static.vecteezy.com/system/resources/previews/002/685/952/original/single-continuous-line-of-big-cupcake-big-cupcake-fast-food-in-one-line-style-isolated-on-white-background-vector.jpg"></img>
        <div className={classes.section_heading}>
          <h1>
            Get in touch with <span>EaTic</span>
          </h1>
        </div>
        <p>
          If you have a question or just want to tell us how much you appreciate
          Web Design, don’t hesitate to get in contact with EaTic devop's.
        </p>
        <div className={classes.top}>
          <div className={classes.contact}>
            <ion-icon name="home-outline"></ion-icon>
            <h2>VISIT US</h2>
            <p className={classes.joke}>You are more than welcome..</p>
            <p className={classes.info}>
              3159-E sudama nagar, Indore, India 452009
            </p>
          </div>
          <div className={classes.contact}>
            <ion-icon name="call-outline"></ion-icon>
            <h2>CALL US</h2>
            <p className={classes.joke}>Want to hear my voice</p>
            <p className={classes.info}>(+91) 6266515520</p>
          </div>
          <div className={classes.contact}>
            <ion-icon name="mail-open-outline"></ion-icon>
            <h2>MAIL US</h2>
            <p className={classes.joke}>Postcards now old way, we've E-mail</p>
            <p className={classes.info}>nimishdubey03@gmail.com</p>
          </div>
        </div>
        <div className={classes.last}>
          <div className={classes.inner}>
            <div className={classes.row}>
              <div className={classes.footer_col}>
                <h1>
                  <a href="/home">EaTic</a>
                </h1>
                <div className={classes.copyright}>
                  <p>
                    &copy; EaTic 2021 <br></br> all rights Reserved
                  </p>
                </div>
              </div>
              <div className={classes.footer_col}>
                <h5>Quick Links</h5>
                <ul>
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/virtues">Features</a>
                  </li>
                  <li>
                    <a href=" ">Privacy</a>
                  </li>
                  <li>
                    <a href=" ">Devop's</a>
                  </li>
                </ul>
              </div>
              <div className={classes.footer_col}>
                <h5>Get help</h5>
                <ul>
                  <li>
                    <a href="">Recipes</a>
                  </li>
                  <li>
                    <a href="">User Data</a>
                  </li>
                  <li>
                    <a href="">Payments</a>
                  </li>
                  <li>
                    <a href="">Cookies</a>
                  </li>
                  <li>
                    <a href="">FAQ's</a>
                  </li>
                </ul>
              </div>
              <div className={classes.footer_col}>
                <div className={classes.social_item}>
                  <h5>Socials</h5>
                  <div className={classes.social}>
                    <a
                      className={classes.insta}
                      href="https://www.instagram.com/nimish.dubey/"
                    >
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a
                      className={classes.linkedin}
                      href="https://www.linkedin.com/in/nimish-dubey-782969209/"
                    >
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    <a
                      className={classes.github}
                      href="https://github.com/nimishdubey03"
                    >
                      <ion-icon name="logo-github"></ion-icon>
                    </a>
                    <a
                      className={classes.twitter}
                      href="https://twitter.com/Nimish_dubey03"
                    >
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </div>
                  <h5>Developed By</h5>
                  <a href="https://nimish.netlify.app/">Nimish Dubey</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
