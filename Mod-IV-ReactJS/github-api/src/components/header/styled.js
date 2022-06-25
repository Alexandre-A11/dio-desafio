import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem;
    justify-content: center;

    input {
        border: 0.1rem solid #37465d;
        border-radius: 0.4rem;
        margin-right: 0.4rem;
        height: 2.4rem;
        width: 30%;
        padding: 0.8rem;
        outline: none;
        color: #ccc;

        &:focus {
            border: 0.1rem solid #41cbbf;
        }
    }

    button {
        background-color: #09bc8a;
        padding: 0.4rem 0.8rem;
        border-radius: 0.4rem;

        &:hover {
            background-color: #41cbbf;
        }

        span {
            color: #fff;
            font-weight: bold;
        }
    }
`;
