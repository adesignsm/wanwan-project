import React, {useState, useEffect} from "react";
import Instafeed from 'instafeed.js';
import "./instagram.css";

const Instagram = () => {
    const [feed, setFeed] = useState([]);

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
          setColumnOneData(columnOne);
        } else if (i % 3 === 1) {
          columnTwo.push(testFeedChildren[i]);
          setColumnTwoData(columnTwo);
        } else {
          columnThree.push(testFeedChildren[i]);
          setColumnThreeData(columnThree);
        }
      }
    }
  
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

      //I call the data sorting function here
      sortFeedData();
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
            </div>
        </>
        
    );
};


export default Instagram;

