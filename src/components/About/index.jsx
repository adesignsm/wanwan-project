import React, {useState, useEffect} from "react";
import Instafeed from 'instafeed.js';
import "./about-page.css";

const About = () => {
    const [feed, setFeed] = useState([]);

    useEffect(() => {

        const userFeed = new Instafeed({
          get: 'user',
          limit: 9,
          target: "instafeed-container",
          resolution: 'low_resolution',
          accessToken: process.env.REACT_APP_INSTA_TOKEN,
          template:
          '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
        after: function () {
          const images = document.getElementById("instafeed-container").getElementsByTagName("img");
          const imagesArray = Array.prototype.slice.call(images);
          setFeed(imagesArray);
        },
        });
        userFeed.run();
      }, []);
      

    

    return (

<div id="about-container">
        <div className="about-box-container">
            <div className="about-box-column">
                <div className="primary-about-info">
                <h1>MEET WANWAN</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Commodi ab omnis temporibus explicabo
                     consequatur? Inventore odit sunt veniam 
                     praesentium, similique sequi cupiditate, 
                     iusto deserunt accusamus perferendis quos!
                      Modi obcaecati maxime mollitia saepe.
                      Inventore odit sunt veniam 
                     praesentium, similique sequi cupiditate, 
                     iusto deserunt accusamus perferendis quos!
                      Modi obcaecati maxime mollitia saepe.</p>
                    <p>Thanks for coming by<br></br>Team WanWan</p>

                </div>
            </div>
            <div className="about-box-column">
                <div className="mini-column">
                <div id="instafeed-container" className="slide-down-loop">
                {feed.map((item) => (
              <img
                key={item.id}
                src={item.getAttribute("src")}
                alt={item.getAttribute("alt")}
              />
            ))}
                </div>
                </div>  
            </div>
        </div>
</div>
    )
}

export default About;