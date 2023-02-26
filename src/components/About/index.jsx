import React from "react";
import "./about-page.css";

const About = () => {


    return (
<div id="about-container">
        <div className="about-box-container">
            <div className="about-box-column">
                <div className="primary-about-info">
                <h1>MEET WANWAN</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Commodi ab omnis temporibus explicabo
                     consequatur? Inventore odit sunt veniam 
                     praesentium, similique sequi cupiditate, 
                     iusto deserunt accusamus perferendis quos!
                      Modi obcaecati maxime mollitia saepe.
                      Inventore odit sunt veniam 
                     praesentium, similique sequi cupiditate, 
                     iusto deserunt accusamus perferendis quos!
                      Modi obcaecati maxime mollitia saepe.</p>
                    <p>Thanks for coming by<br></br>Team WanWan</p>

                </div>
            </div>
            <div className="about-box-column">
                <div className="mini-column">
                <div>
                <h1>col1</h1>
                </div>
                <div>
                <h1>col2</h1>
                </div>
                <div>
                <h1>col3</h1>
                </div>
                </div>
            </div>
        </div>
</div>
    )
}

export default About;