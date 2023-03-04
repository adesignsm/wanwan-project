import React, {useLayoutEffect, useState} from "react";
import "./reviews.css";

const YOTPO_KEY = process.env.REACT_APP_YOTPO_API_KEY;
const SECRET_KEY = process.env.REACT_APP_SECRET_API_KEY;

const Reviews = () => {
    const [reviewData, setReviewData] = useState([]);

    const fetchReviewData = () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'Content-Type': 'application/json'}
        };
          
        fetch(`https://api.yotpo.com/v1/apps/${YOTPO_KEY}/reviews?utoken=${SECRET_KEY}`, options)
        .then(response => response.json())
        .then(response => setReviewData(response.reviews))
        .catch(err => console.error(err));
    }

    useLayoutEffect(() => {
       fetchReviewData();
    }, []);

    console.log(reviewData)

    return (
        <>
            <div id="reviews-container">
                <div className="review-counter">
                    <h1> {reviewData.length} reviews </h1>
                </div>
                {reviewData.length > 0 &&
                    <div className="reviews-container">
                        <div className="reviews">
                            {reviewData.map((review) => {
                                return (
                                    <div className="review-row">
                                        <div className="review-sub-row">
                                            <label> Review Title </label>
                                            <h1 className="review-title">{review.title}</h1>
                                        </div>
                                        <div className="review-sub-row">
                                            <label> Score </label>
                                            <h3 className="review-score">{review.name} gave a score of {review.score}</h3>
                                        </div>
                                        <div className="review-sub-row">
                                            <label> Review </label>
                                            <h2 className="review-content">"{review.content}"</h2>
                                            <label className="review-date"> Review created on {review.created_at.replace("T", " at ").replace(".000Z", "")}</label>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Reviews;