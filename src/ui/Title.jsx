import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin: 1rem 0;
`;

const StyledTitle = styled.div`
  display: inline-block;
  padding: 0.5rem 0;
  border-top: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  font-size: 2.4rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 900;
  font-family: 'Roboto Mono', sans-serif;
  
`;

function Title({children}) {
  return <TitleContainer>
  <StyledTitle>
    {children}
  </StyledTitle>
  </TitleContainer>
}

export default Title;