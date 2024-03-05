import { Autocomplete, TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 100px;
    
    
    width: 500px;
    height: 400px;
    margin: 0 auto;
    
    border-radius: 8px;
    
    background: var(--main);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    
    
    h1 {
        margin-top: -20px;   
    }

    .buttons {
        width: 400px;
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }

    .product {
        margin-bottom: 30px;
    }

    .imageUrl {
        /* margin-top: 30px; */
    }
`


export const StyledAutocomplete = styled(Autocomplete)`
`;

export const StyledTextField = styled(TextField)`
    
`;
