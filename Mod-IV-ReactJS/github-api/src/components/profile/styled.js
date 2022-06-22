import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`;

export const WrapperUsername = styled.div`
    display: flex;
    align-items: center;
    h3 {
        margin-right: 0.5rem;
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    div {
        display: flex;
        flex-direction: column;
        margin-right: 0.5rem;
        align-items: center;
    }
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 20rem;
    margin: 1rem;
`;
