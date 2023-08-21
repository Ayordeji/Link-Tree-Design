import { useState } from "react";
import SHARE from "./img/share-06.png";
import SHAREMOBILE from "./img/dots-horizontal.png";
import PROFILE from "./img/profile__img.png";
import SLACK from "./img/slack.png";
import GITHUB from "./img/Social icon.png";
import KODECAMP from "./img/kodecamp logo white 2.png";
import KODEHAUZ from "./img/KodeHauz Logo 1.png";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="container">
        <div class="share">
          <a href="https://ayodejieluyemi.great-site.net/">
            <img src={SHARE} alt="" srcset="" />
          </a>
        </div>

        <div class="share-mobile">
          <a href="https://ayodejieluyemi.great-site.net/">
            <img src={SHAREMOBILE} alt="" srcset="" />
          </a>
        </div>

        <div class="profile">
          <img src={PROFILE} alt="" srcset="" />
          <h1>John Doe</h1>
        </div>
        <div class="links">
          <a href="https://twitter.com/ayordejie" target="_blank">
            Twitter Link
          </a>
          <a href="https://ayodejieluyemi.great-site.net" target="_blank">
            KodeCamp Team
          </a>
          <a href="https://github.com/Ayordeji" target="_blank">
            KodeCamp Books
          </a>
          <a href="#">Python Books</a>
          <a href="#">Background Check for Coders</a>
          <a href="#">Design books</a>
        </div>
        <div class="social">
          <img src={SLACK} alt="" srcset="" />
          <a href="https://github.com/Ayordeji">
            <img src={GITHUB} alt="" srcset="" />
          </a>
        </div>
        <hr />
        <div class="kodecamp-logos">
          <span class="special">
            <img src={KODECAMP} alt="" srcset="" />
          </span>
          <p>KodeCamp Internship Task</p>
          <img src={KODEHAUZ} alt="" srcset="" />
        </div>
      </div>
    </>
  );
}

export default App;
