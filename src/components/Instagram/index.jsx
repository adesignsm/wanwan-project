import React, {useState, useEffect} from "react";
import $ from "jquery";
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
          testFeedChildren[i].classList.add("column-1");
          columnOne.push(testFeedChildren[i]);
        } else if (i % 3 === 1) {
          testFeedChildren[i].classList.add("column-2");
          columnTwo.push(testFeedChildren[i]);
        } else {
          testFeedChildren[i].classList.add("column-3");
          columnThree.push(testFeedChildren[i]);
        }
      }
      setColumnOneData(columnOne);
      setColumnTwoData(columnTwo);
      setColumnThreeData(columnThree);
    }

    useEffect(() => {


      setTimeout(() => {
        sortFeedData();

        //column1
        gsap.set(".feed-item.column-1", {
          y: (i) => i * 50
        });
        
        gsap.to(".feed-item.column-1", {
          duration: 20,
          ease: "none",
          y: "-=400", //move each box 500px up
          modifiers: {
            y: gsap.utils.unitize(y => parseFloat(y) % 500) //force y value to be between 0 and 500 using modulus
          },
          repeat: -1
        });

        //column2
        gsap.set(".feed-item.column-2", {
          y: (i) => i * 50
        });
        
        gsap.to(".feed-item.column-2", {
          duration: 20,
          ease: "none",
          y: "+=400", //move each box 500px up
          modifiers: {
            y: gsap.utils.unitize(y => parseFloat(y) % 500) //force y value to be between 0 and 500 using modulus
          },
          repeat: -1
        });

        //column3
        gsap.set(".feed-item.column-3", {
          y: (i) => i * 50
        });
        
        gsap.to(".feed-item.column-3", {
          duration: 20,
          ease: "none",
          y: "-=400", //move each box 500px up
          modifiers: {
            y: gsap.utils.unitize(y => parseFloat(y) % 500) //force y value to be between 0 and 500 using modulus
          },
          repeat: -1
        });
      }, 100);
  }, []);

    return (
        <>
              <div id="instagram-container" style={{ display: "none" }}></div>
              
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
              
              <div className="wrapper">
                <div id="test-container">
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto" /></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                  <div className="feed-item"><a href="https://wwww.google.ca" target="_blank"><img src="https://plus.unsplash.com/premium_photo-1663013080777-11e6f7bc63b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="foto"/></a></div>
                </div>
              </div>
        </> 
    );
};


export default Instagram;

