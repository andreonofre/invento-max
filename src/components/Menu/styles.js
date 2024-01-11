import styled from 'styled-components';

export const Container = styled.div`
  
  h1 {
    text-align: center;
    font-size: 3rem;
    margin-right: 20px;

  }

`;

export const Content = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;

    .icon-menu {
        margin-left: 20px;
    }

`;

export const StyledIframeContainer = styled.div`
  width: 100%;
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 1000px;
  border: none;
`;
