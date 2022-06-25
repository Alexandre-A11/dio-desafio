import React from "react";
import GithubProvider from "./providers/github-provider";
import { ResetCSS } from "./global/resetCSS";
import App from "./App";

const Provider = () => {
    return (
        <main>
            <GithubProvider>
                <ResetCSS />
                <App />
            </GithubProvider>
        </main>
    );
};

export default Provider;
