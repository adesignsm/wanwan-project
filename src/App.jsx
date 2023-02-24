import React, { useEffect, useState } from "react";
import $ from "jquery";
// import Loading from "./components/Loading/index.jsx";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Header/sub-components/Menu";
import "./root.css";

const App = () => {
    const [loadingStatus, setLoadingStatus] = useState(true);

    const loadingInterval = setInterval(() => {
        if (document.getElementById("logo-obj").data.indexOf("logo-original") !== -1) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                setLoadingStatus(false);
                if (!loadingStatus) $("#loading-screen").fadeOut(1000);
            }, 1500);
        }
    }, 500);

    return (
        <>
            {/* <Loading /> */}
            <Header />
            <Home />
            <Menu/>
        </>
    )
}

export default App;