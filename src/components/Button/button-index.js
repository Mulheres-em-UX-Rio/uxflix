import styled from 'styled-components';

const Button = styled.button`
    width: max-content;
    color: var(--black);
    border: none;
    box-sizing: border-box;
    background-color: var(--primary);
    cursor: pointer;
    padding: 8px 25px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    font-family: "Klavika-Light";
    outline: none;
    border-radius: 20px;
    text-decoration: none;
    display: inline-block;
    transition: all ease-in-out .1s;

    &:hover,
    &:focus {
        background-color: #ea8774;
        transform: scale(1.03);
    }
`;

export default Button;
