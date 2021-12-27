import styled from "styled-components";

const LoadingBigGifContainer = styled.div`

    @keyframes loading {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    height: 15rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    background-color: chartreuse;
    border-radius: 50px;

    >div {
        border: 1.5rem solid #000;
        border-radius: 50%;
        border-top-color: rgba(0,0,0,0.2);
        height: 200px;
        width: 200px;
        animation: loading 2s linear infinite;
    }
`;

export default LoadingBigGifContainer;