import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import GithubProvider from "./providers/github-provider";
import Repositories from "./components/repositories";
import { ResetCSS } from "./global/resetCSS";

const App = () => {
    return (
        <main>
            <GithubProvider>
                <ResetCSS />
                <Layout>
                    <Profile />
                    <Repositories />
                </Layout>
            </GithubProvider>
        </main>
    );
};

export default App;
