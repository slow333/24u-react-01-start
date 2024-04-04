import styled from "styled-components";
import {fontFamily, weight} from "./fonts.js";

const Header = styled.header`
  ${props => fontFamily[props.family]}
  ${props => weight[props.weight]}
  
  width: 100%;
  
   background-color: var(--color-grey-900);
   color: #9ca3af;  
   padding: 1.6rem 0;
   text-align: center;
   font-size: 4rem;
   text-transform: uppercase;
`;

export default Header;