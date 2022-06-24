import React from "react";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {
    return (
        <S.WrapperTabs
            selectTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem
                    nameRepository="repository-name"
                    fullNameRepository="fullname repository"
                    linkRepository="https://linkrepo.com"
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem
                    nameRepository="repository-name2"
                    fullNameRepository="fullname repository2"
                    linkRepository="https://linkrepo.com2"
                />
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    );
};

export default Repositories;
