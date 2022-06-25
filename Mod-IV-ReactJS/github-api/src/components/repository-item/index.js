import React from "react";
import * as S from "./styled";

const RepositoryItem = ({
    nameRepository,
    linkRepository,
    fullNameRepository,
}) => {
    return (
        <S.Wrapper>
            <S.WrapperTitle>{nameRepository}</S.WrapperTitle>
            <S.WrapperFullName>
                <S.WrapperLink
                    href={"https://github.com/" + linkRepository}
                    target="_blank"
                    rel="noreferrer"
                >
                    {fullNameRepository}
                </S.WrapperLink>
            </S.WrapperFullName>
        </S.Wrapper>
    );
};

export default RepositoryItem;
