import styled from "styled-components";

const StyledHeader = styled.header`
   display: flex;
   background-color: var(--color-grey-900);
   color: #9ca3af;
   font-weight: 600;
   padding: 2.2rem 0;
   text-align: center;
   justify-content: center;
   font-size: 2.6rem;
   text-transform: uppercase;
`;
const Header = ({children}) => {
  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  );
};

export default Header;