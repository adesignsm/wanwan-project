import React, { useEffect, useState } from "react";

import loadingLogo_BLACK from "../../assets/main-assets/loading-logo.svg";
import loadingLogo_RED from "../../assets/main-assets/loading-logo-original-with-text.svg";

import "../../styles/loading-styles/loading.css";
import $ from "jquery";

const Loading = () => {
    const getSvgData = (svg) => {
        let svgDoc = svg.contentDocument;
        let switchUrl = `http://localhost:3000${loadingLogo_RED}`;
        let path1 = svgDoc.all[1], path2 = svgDoc.all[2], path3 = svgDoc.all[3];

        $(path1).delay(1000).animate({opacity: 1}, 1000);
        $(path2).delay(2000).animate({opacity: 1}, 1000);
        $(path3).delay(3000).animate({opacity: 1}, 1000);

        setTimeout(() => {
            if (path3.style.opacity === "1") {
                $(svg).delay(500).animate({opacity: "0"}, 1000);
                setTimeout(() => {
                    svg.data = switchUrl;

                    if (svg.data === switchUrl) {
                        $(svg).delay(1000).animate({opacity: "1"}, 1000);
                    }
                }, 2000);
            }
        }, 4500);
    }

    setTimeout(() => {
        let logoObj = document.getElementById("logo-obj");
        getSvgData(logoObj);
    }, 1000);

    return (
        <>
            <div id = "loading-screen">
                <div id = "loading-logo">
                    <object id = "logo-obj" data={loadingLogo_BLACK} type="image/svg+xml" />
                </div>
            </div>
        </>
    )
}

export default Loading;