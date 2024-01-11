import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        text-align: center;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px;

    margin: 0 auto;

    width: 500px;
    height: 450px;

    background: var(--main);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-weight: bold;

    .user {
        margin-bottom: 2rem;
    }

    .pass {
        margin-bottom: .5rem;
    }

    /* .button-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
    } */

    p {
        font-size: 1rem;
        font-weight: 400;
    }

    a {
        padding-left: 10px;
        color: #002fff;
        width: 100%;
    }

`

export const Label = styled.label`
    font-size: .9rem;
`
export const Input = styled.input`
    width: 300px;
    height: 35px;

    background: var(--lightgray);

    border-radius: 4px;
    outline: none;
    border: none;
    
`

export const Button = styled.button`
    width: 100%;
    height: 40px;

    padding: 10px 15px;
    margin-top: 20px;
    margin-left: -10px;

    font-size: 16px;
    font-weight: 700;

    background: linear-gradient(to right, #002fff, #00bfff);
    color: var(--main);

    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    transition: 0.6s ease;
    
    &:hover {
        background: linear-gradient(to right, #0056b3, #0088ff);
    }

   
` 