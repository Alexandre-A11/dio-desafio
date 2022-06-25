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
            <S.WrapperFullName>fullname:</S.WrapperFullName>
            <S.WrapperLink
                href={linkRepository}
                target="_blank"
                rel="noreferrer"
            >
                {fullNameRepository}
            </S.WrapperLink>
        </S.Wrapper>
    );
};

export default RepositoryItem;
