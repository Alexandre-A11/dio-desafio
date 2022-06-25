import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    input {
        border: 0.1rem solid #ccc;
        border-radius: 0.4rem;
        margin-right: 0.4rem;
        height: 2.4rem;
        width: 100%;
        padding: 0.8rem;
    }

    button {
        background-color: #00bcd4;
        padding: 0.4rem 0.8rem;
        border-radius: 0.4rem;

        &:hover {
            background-color: #00acc1;
        }

        span {
            color: #fff;
            font-weight: bold;
        }
    }
`;
