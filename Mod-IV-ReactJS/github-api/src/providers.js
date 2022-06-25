import React from "react";
import GithubProvider from "./providers/github-provider";
import { ResetCSS } from "./global/resetCSS";
import App from "./App";
import * as S from "./global/styled";

const Provider = () => {
    return (
        <main>
            <S.Wrapper>
                <GithubProvider>
                    <ResetCSS />
                    <App />
                </GithubProvider>
            </S.Wrapper>
        </main>
    );
};

export default Provider;
