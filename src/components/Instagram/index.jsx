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

      // console.log(document.getElementById("instafeed-container").children)
      // console.log(typeof(document.getElementById("instafeed-container").children))

      let testFeed = document.getElementById("test-container").children;
      let columnOneArr = [], columnTwoArr = [], columnThreeArr = [];
      let indexOne = 0, indexTwo = 0, indexThree = 0;

      while (indexOne < Object.keys(testFeed).length / 3) {
        indexOne++;
        columnOneArr.push(testFeed[indexOne]);
      }

      console.log(columnTwoArr);
      console.log(columnOneArr);
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
              <div id="test-container" style={{display: "none"}}>
                <a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" /></a>
                <a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" /></a>
                <a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" /></a>
                <a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" /></a>
                <a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" /></a>
                <a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" /></a>
                <a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" /></a>
                <a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" /></a>
                <a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" /></a>
                <a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" /></a>
                <a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" /></a>
                <a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" /></a>
              </div>

              <div className="column-1" />
              <div className="column-2" />
              <div className="column-3" />
            </div>
        </>
        
    );
};


export default Instagram;

