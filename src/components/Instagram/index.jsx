import React, {useState, useEffect} from "react";
import Instafeed from 'instafeed.js';
import "./instagram.css";



const Instagram = () => {
    const [feed, setFeed] = useState([]);


    useEffect(() => {
      const userFeed = new Instafeed({
        get: 'user',
        limit: 12,
        target: "instafeed-container",
        resolution: 'low_resolution',
        accessToken: process.env.REACT_APP_INSTA_TOKEN,
        template:
        '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
        

      });
      userFeed.run();

      console.log(document.getElementById("instafeed-container").children)
      console.log(typeof(document.getElementById("instafeed-container").children))



  }, []);

    return (
        <>
           <div id="instafeed-container">
                    {/* {feed.map((item, index) => (
                      <img
                        key={item.id}
                        src={item.getAttribute("src")}
                        alt={item.getAttribute("alt")}
                      />
                      ))} */}
                      {feed}
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                
        </>
        
    );
};


export default Instagram;

