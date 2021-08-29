import React from 'react';

import classes from './Services.module.css';

function Services() {
  return (
    <div>
      <div className={classes.services}>
        <img src="https://easydrawingguides.com/wp-content/uploads/2020/09/Spoon-and-Fork-08.png"></img>
        <div className={classes.section_heading}>
          <h1>
            features of <span>EaTic</span>
          </h1>
        </div>
        <p>
          We’re not perfect, but we hope to get more right than we get wrong.
        </p>
        <div className={classes.service}>
          <div className={classes.content}>
            <ion-icon name="cloud-done-outline"></ion-icon>
            <h2>Updated servers</h2>
          </div>
          <div className={classes.content}>
            <ion-icon name="heart-circle-outline"></ion-icon>
            <h2>Healthy recipes</h2>
          </div>
          <div className={classes.content}>
            <ion-icon name="earth-outline"></ion-icon>
            <h2>Worldwide approach</h2>
          </div>
          <div className={classes.content}>
            <ion-icon name="timer-outline"></ion-icon>
            <h2>Quick response</h2>
          </div>
          <div className={classes.content}>
            <ion-icon name="id-card-outline"></ion-icon>
            <h2>User friendly</h2>
          </div>
          <div className={classes.content}>
            <ion-icon name="ribbon-outline"></ion-icon>
            <h2>Leading providers</h2>
          </div>
          <div className={classes.content}>
            <ion-icon name="lock-open-outline"></ion-icon>
            <h2>Free access</h2>
          </div>
          <div className={classes.content}>
            <ion-icon name="chatbubbles-outline"></ion-icon>
            <h2>Friendly support</h2>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Services;
