import React, {useState, useEffect} from "react";
import Instafeed from 'instafeed.js';
import "./instagram.css";

const Instagram = () => {
    const [feed, setFeed] = useState([]);
  
    useEffect(() => {

      const fetchData = async () => {
        const apiKey = process.env.REACT_APP_INSTA_TOKEN
        const user_id = process.env.REACT_APP_INSTA_USER_ID
        const instagram_App_Secret = process.env.REACT_APP_INSTA_APP_SECRET
        const url =`https://graph.instagram.com/${user_id}?fields=id,username&access_token=${apiKey}`;

        const response = await fetch(url);
        console.log(response)
        const data = await response.json();
        console.log(data)
        setFeed(data);
      };
  
      fetchData();
    }, []);


    return (
        <>
        <div id="instafeed-container">
        <img src={feed}/>
        </div>
        </>
    )
}

export default Instagram;

