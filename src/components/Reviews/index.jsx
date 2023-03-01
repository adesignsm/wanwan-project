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
                {reviewData.length > 0 &&
                    <div className="reviews-container">
                        <div className="review-counter">
                            <h1> {reviewData.length} reviews </h1>
                        </div>
                        <div className="reviews">
                            {reviewData.map((review) => {
                                return (
                                    <div className="review-row">
                                        <h1 className="review-title">{review.title}</h1>
                                        <h3 className="review-score">{review.name} gave a score of {review.score}</h3>
                                        <h2 className="review-content">{review.content}</h2>
                                        <h3 className="review-date">{review.created_at}</h3>
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