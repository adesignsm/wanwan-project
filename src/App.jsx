import React, { useEffect, useState } from "react";
import $ from "jquery";

// import Loading from "./components/misc-components/Loading";

import Header from "./components/main-components/Header/Header";
import Home from "./components/main-components/Home/Home";
import Menu from "./components/main-components/Header/sub-components/Menu";

import "./styles/root-styles/root.css";

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