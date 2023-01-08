import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from './utils/context';

ReactDOM.render(
<Suspense>
    <AppProvider>
        <App />
        </AppProvider>
            </Suspense>, 
    document.querySelector("#root")
    );