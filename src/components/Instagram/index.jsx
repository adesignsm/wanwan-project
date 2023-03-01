import React from "react";
import "./instagram.css";

const Instagram = () => {
    const [feed, setFeed] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const url = 'https://api.instagram.com/...'; // Replace with your Instagram API endpoint
        const response = await fetch(url);
        const data = await response.json();
        setFeed(data);
      };
  
      fetchData();
    }, []);

    return (
        <>
        <img src={feed}/>
        </>
    )
}

export default Instagram;