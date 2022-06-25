import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    h1 {
        font-size: 2.4rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1.2rem;
        font-weight: bold;
    }

    h4 {
        font-size: 1rem;
        font-weight: bold;
    }

    a {
        color: turquoise;
        font-weight: bold;
        font-size: 1.2rem;
    }
`;

export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;

    h3 {
        margin-right: 0.5rem;
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    div {
        margin-right: 0.5rem;
        text-align: center;
    }

    div h4 {
        margin-bottom: 0.5rem;
    }
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 20rem;
    margin: 1rem;
`;
