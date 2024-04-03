import tw from "tailwind-styled-components";
import H1 from "../ui/H1.jsx";

const H2 = tw.div`
  text-3xl 
  text-amber-600 
  mb-6 mt-8
  pt-12
  border-t-4 border-gray-600/50
  `;

const Container = tw.ul`
  flex flex-col mt-9 border-t-2 pt-4 gap-6 ps-5 text-3xl  border-amber-500
`
const BodyText = tw.li`
   font-bold 
`
const Home = () => {
  return (
       <>
         <H1>Main techs</H1>
         <Container>
           <BodyText> react-router-dom</BodyText>
           <BodyText> styled components</BodyText>
           <BodyText> react async function</BodyText>
         </Container>
         <H2>Memo</H2>
         <Container>
           <BodyText>tailwind와 styled-components를 동시에 사용</BodyText>
           <BodyText>설정을 하기 했는데 다른데서는 잘안됨</BodyText>
         </Container>
       </>
  );
};

export default Home;