import tw from "tailwind-styled-components";
import Header from "../main/Header.jsx";
import styled from "styled-components";
import ContentFrame from "../main/ContentFrame.jsx";
import getHome from "../data/homeData.js";

const Ul = styled.ul`
   display: flex;
   flex-direction: column;
   justify-items: start;
   font-size: 1.6rem;
   width: 100%;
`
const Li = tw.li`
   list-disc text-3xl ms-8 mt-3 text-start
`
const Home = () => {
  const data = getHome();

  return (
    <>
      <Header  fontFamily='roboto' weight='600'>Main techs</Header>
      <ContentFrame>
        <Ul>
          {data.map(d => <Li>{d.content}</Li>)}
        </Ul>
      </ContentFrame>
    </>
  );
};

export default Home;