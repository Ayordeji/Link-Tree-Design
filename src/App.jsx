import { useState } from "react";
import "./App.css";
import ASD from "../images/KodeHauz Logo 1.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="container">
        <div class="share">
          <a href="https://ayodejieluyemi.great-site.net/">
            <img src="../images/share-06.png" alt="" srcset="" />
          </a>
        </div>

        <div class="share-mobile">
          <a href="https://ayodejieluyemi.great-site.net/">
            <img src="../images/dots-horizontal.png" alt="" srcset="" />
          </a>
        </div>

        <div class="profile">
          <img src={AD} alt="" srcset="" />

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
          <img src={require("./images/slack.png")} alt="" srcset="" />
          <a href="https://github.com/Ayordeji">
            <img src="./images/Social icon.png" alt="" srcset="" />
          </a>
        </div>
        <hr />
        <div class="kodecamp-logos">
          <span class="special">
            <img src="./images/kodecamp logo white 2.png" alt="" srcset="" />
          </span>
          <p>KodeCamp Internship Task</p>
          <img src={ASD} alt="" srcset="" />
        </div>
      </div>
    </>
  );
}

export default App;
