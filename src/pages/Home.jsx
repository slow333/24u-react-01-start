import tw from "tailwind-styled-components";

const H1 = tw.div`
  text-5xl 
  text-red-500
  font-bold opacity-40
  mb-10
`

const Home = () => {
  return (
    <>
    <H1>Main techs</H1>
    <ul className='flex flex-col gap-9 text-3xl'>
      <li> react-router-dom</li>
      <li> styled components </li>
      <li> react async function </li>
    </ul>
    </>
  );
};

export default Home;