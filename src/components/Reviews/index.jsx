import React, {useLayoutEffect} from "react";
import "./reviews.css";

const YOTPO_KEY = process.env.REACT_APP_YOTPO_API_KEY;

const Reviews = () => {
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'Content-Type': 'application/json'}
    };

    const fetchReviewData = () => {
        fetch(`https://api.yotpo.com/v1/apps/APP_KEY/reviews?utoken=utoken`, options).then((response) => {
            response.json()
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.error(err);
        });
    }

    useLayoutEffect(() => {
        fetchReviewData();
    }, []);

    return (
        <>
            
        </>
    )
}

export default Reviews;