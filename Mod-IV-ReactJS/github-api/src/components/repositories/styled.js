import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 1.4rem;
    width: 50%;
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
    border: 0.1rem solid #333;
    padding: 0.8rem;
    user-select: none;
    cursor: pointer;
    margin: 0.4rem;
    z-index: 1;

    &:focus {
        outline: none;
        color: turquoise;
    }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    padding: 0.8rem;
    border: 0.1rem solid #333;
    margin-top: 0.4rem;

    &.is-selected {
        display: block;
    }
`;

WrapperTabPanel.tabsRole = "TabPanel";
