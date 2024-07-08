import React from 'react'
import styled from 'styled-components';

export default function Body({children}) {
  console.log(children);
  return (
    <Container>
      <WidthStyle>
        {children}
      </WidthStyle>
    </Container>
  )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100vw;
height; 100vh;
`;

const WidthStyle = styled.div`
max-width: 80vw;
`