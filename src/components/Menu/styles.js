import styled from 'styled-components';

export const Container = styled.div`
  
  h1 {
    text-align: center;
    font-size: 3rem;
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

export const User = styled.div`
    display: flex;
    align-items: center;

    gap: 20px;
    margin-right: 20px;

    div {
      font-size: 20px;
      font-weight:bold;
    }
`;


// export const StyledIframeContainer = styled.div`
//   width: 100%;
// `;

// export const StyledIframe = styled.iframe`
//   width: 100%;
//   height: 1000px;
//   border: none;
// `;
