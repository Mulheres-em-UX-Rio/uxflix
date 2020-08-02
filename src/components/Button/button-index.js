import styled from 'styled-components';

const Button = styled.a`
    width: max-content;
    color: var(--black);
    border: none;
    box-sizing: border-box;
    background-color: var(--primary);
    cursor: pointer;
    padding: 10px 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: all ease-in-out .3s;
    &:hover,
    &:focus {
        background-color: #ea8774;
        transform: scale(1.03);
    }
`;

export default Button;
