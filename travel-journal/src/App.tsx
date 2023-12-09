import "./App.css";
import Card from "./components/Card";
import data from "./data";
import Globe from "./assets/globe.svg?react";

function App() {
  const cards = data.map((card, idx) => {
    return <Card key={idx} {...card} />;
  });

  return (
    <div className='font-inter'>
      <div className='w-full h-28 bg-red-600 flex items-center justify-center gap-3'>
        <Globe />
        <h2 className='text-2xl text-white'>my travel journal.</h2>
      </div>
      <div className='flex flex-col gap-10 mx-auto my-20 max-w-7xl px-20'>{cards}</div>
    </div>
  );
}

export default App;
