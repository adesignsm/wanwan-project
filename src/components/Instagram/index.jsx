import React, {useState, useEffect} from "react";
import { gsap } from "gsap";
import Instafeed from 'instafeed.js';
import "./instagram.css";

const Instagram = () => {

    const [columnOneData, setColumnOneData] = useState([]);
    const [columnTwoData, setColumnTwoData] = useState([]);
    const [columnThreeData, setColumnThreeData] = useState([]);

    //THIS IS THE FUNCTION THAT SORTS YOU MAIN SOURCE OF DATA INTO THREE ARRAYS
    //First I declare a variable for the parent element and then a variable for its children elements
    //I seperate them by using the modulus operater (%) and then i push them into the three arrays i declared
    //After the elements are pushed into their respective arrays I set the state for each column
    //Once the states have been established we can now iterate over them and return them in the column divs in the return statement below
    const sortFeedData = () => {
      let testFeed = document.getElementById("test-container");
      let testFeedChildren = testFeed.childNodes;

      const columnOne = [], columnTwo = [], columnThree = [];

      for (let i = 0; i < testFeedChildren.length; i++) {
        if (i % 3 === 0) {
          columnOne.push(testFeedChildren[i]);
        } else if (i % 3 === 1) {
          columnTwo.push(testFeedChildren[i]);
        } else {
          columnThree.push(testFeedChildren[i]);
        }
      }
      setColumnOneData(columnOne);
      setColumnTwoData(columnTwo);
      setColumnThreeData(columnThree);
    }

    const applyAnimationUp = (columnId) => {
      const column1 = document.getElementById(columnId);
      const images = column1.querySelectorAll("img");
    
      const loopDuration = 10; // Duration in seconds for each image to slide up
    
      images.forEach((img, index) => {
        const startY = index * loopDuration;
        gsap.fromTo(
          img,
          { y: "100%" },
          {
            y: "-100%",
            duration: loopDuration,
            repeat: -1, // Infinite loop
            // repeatDelay: loopDuration * (images.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: column1,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
            },
          }
        );
      });
    };

    const applyAnimationDown = (columnId) => {
      const column1 = document.getElementById(columnId);
      const images = column1.querySelectorAll("img");
    
      const loopDuration = 9; // Duration in seconds for each image to slide up
    
      images.forEach((img, index) => {
        const startY = index * loopDuration;
        gsap.fromTo(
          img,
          { y: "-100%" },
          {
            y: "100%",
            duration: loopDuration,
            repeat: -1, // Infinite loop
            ease: "none",
            scrollTrigger: {
              trigger: column1,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
            },
          }
        );
      });
    };




  
    useEffect(() => {
      const userFeed = new Instafeed({
        get: 'user',
        limit: 24,
        target: "instagram-container",
        resolution: 'low_resolution',
        accessToken: process.env.REACT_APP_INSTA_TOKEN,
        template:
        '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
      });
      userFeed.run();

      //I call the data sorting function here
      //setTimeout is used for userFeed.run to complete before calling sortFeedData
      setTimeout(() =>{
        sortFeedData();
        applyAnimationUp("column-1");
        applyAnimationDown("column-2");
        applyAnimationUp("column-3");
      }, 1000);
  }, []);

    return (
        <>
          
              <div id="instagram-container" style={{ display: "none" }}></div>
              
             
              

              {/*THIS IS WHERE I MAP OVER EACH COLUMN STATE IN THEIR RESPECTIVE DIV CONTAINERS */}
              <div id="column-1">
                {columnOneData.map((item) => {
                  document.getElementById("column-1").append(item);
                })}
              </div>

              <div id="column-2">
                {columnTwoData.map((item) => {
                  document.getElementById("column-2").append(item);
                })}
              </div>

              <div id="column-3">
                {columnThreeData.map((item) => {
                  document.getElementById("column-3").append(item);
                })}
              </div>

            
      
          
        </>
        
    );
};


export default Instagram;

