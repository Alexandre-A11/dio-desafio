import React from "react";

const RepositoryItem = ({
    nameRepository,
    linkRepository,
    fullNameRepository,
}) => {
    return (
        <>
            <h2>{nameRepository}</h2>
            <h4>fullname:</h4>
            <a href={linkRepository} target="_blank" rel="noreferrer">
                {fullNameRepository}
            </a>
        </>
    );
};

export default RepositoryItem;
