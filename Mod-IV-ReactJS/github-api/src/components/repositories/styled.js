import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 1.4rem;
`;

export const WrapperTabList = styled(TabList)`
    display: flex;
    padding: 0.4rem;
    margin: 0;
    list-style-type: none;
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-radius: 0.4rem;
    border: 0.1rem solid #1e293b;
    padding: 0.8rem;
    user-select: none;
    cursor: pointer;
    margin: 0.4rem;

    z-index: 1;

    &:focus {
        outline: none;
        color: #8ec1d6;
    }

    &:hover {
        border-color: #8ec1d6;
        color: #8ec1d6;
    }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    padding: 0.4rem 4rem;
    border: 0.1rem solid #1e293b;
    margin-top: 0.4rem;

    &.is-selected {
        display: block;
    }
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;
