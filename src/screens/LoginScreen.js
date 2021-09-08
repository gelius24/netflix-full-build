import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="container__loginscreen">
    <div className="loginScreen">
      <div className="loginScreen__background">
        <div className="loginScreen__header">
          <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
          <button onClick={() => setSignIn(true)} className="loginScreen__button">
            Sign In
          </button>
        </div>
        
        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen__input">
              <form action="">
                <input type="email" placeholder="Email Adress" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
    <section>
      <div className="sec">
        <div className="txt">
          <h3>Visionnez sur votre téléviseur.</h3>
          <p>Compatible avec les téléviseurs connectés, Playstation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et bien plus encore.</p>
        </div>
        <div className="tv">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
          <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" autoPlay playsInline muted loop type="video/mp4"></video>
        </div>
      </div>
      <div className="sec">
        <div className="st-box">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
          <div className="animation-box">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <p style={{color: 'white'}}>Stranger Things</p>
            <p style={{color: '#0071eb'}}>Téléchargement en cours...</p>
            </div>
            <div className='anim'></div>
          </div>
        </div>
        <div className="txt">
          <h3>Téléchargez vos séries télé pour les visionner hors ligne.</h3>
          <p>Enregistrez vos favoris facilement et ayez toujours quelque chose à visionner.</p>
        </div>
      </div>
      <div></div>
      <div></div>
    </section>
    </div>
  );
}

export default LoginScreen;
