import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 0.4rem;
    width: 36rem;
    height: 6rem;
    padding: 0.8rem;
    margin: 1.6rem 0.4rem;
    align-items: center;
    justify-content: space-between;
`;

export const WrapperTitle = styled.h2`
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0.08rem 0;
`;

export const WrapperFullName = styled.h4`
    font-size: 1.2rem;
    margin: 0.08rem 0;
    color: #7e81ff;
`;

export const WrapperLink = styled.a`
    margin-left: 0.6rem;
    font-size: 1rem;
    font-weight: bold;
    color: #8ec1d6;
`;
