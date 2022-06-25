import React, { createContext, useState, useCallback } from "react";
import gitHubApi from "../services/api";

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
});

const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        hasUser: false,
        loading: false,
        user: {
            id: undefined,
            login: undefined,
            name: undefined,
            avatar_url: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    });

    const getUser = (username) => {
        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        gitHubApi
            .get(`users/${username}`)
            .then(({ data }) => {
                setGithubState((prevState) => ({
                    ...prevState,
                    hasUser: true,
                    user: {
                        id: data.id,
                        login: data.login,
                        name: data.name,
                        avatar_url: data.avatar_url,
                        html_url: data.html_url,
                        blog: data.blog,
                        company: data.company,
                        location: data.location,
                        followers: data.followers,
                        following: data.following,
                        public_gists: data.public_gists,
                        public_repos: data.public_repos,
                    },
                }));
            })
            .finally(() => {
                setGithubState((prevState) => ({
                    ...prevState,
                    loading: !prevState.loading,
                }));
            });
    };

    const getUserRepos = (username) => {
        gitHubApi.get(`users/${username}/repos`).then(({ data }) => {
            console.log(`data: ${JSON.stringify(data)}`);
            setGithubState((prevState) => ({
                ...prevState,
                repositories: data,
            }));
        });
    };

    const getUserStarred = (username) => {
        gitHubApi.get(`users/${username}/starred`).then(({ data }) => {
            console.log(`data: ${JSON.stringify(data)}`);
            setGithubState((prevState) => ({
                ...prevState,
                starred: data,
            }));
        });
    };

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), []),
    };

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    );
};

export default GithubProvider;
