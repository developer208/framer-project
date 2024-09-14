import { useState } from 'react'
import { motion } from 'framer-motion';

function App() {
  const [xaxis, setXaxis] = useState(100);

  return (
    <div className="flex flex-col items-center gap-y-4  min-h-[100vh] lg:w-[80vw] w-[100vw]  lg:mx-auto ">
      <div className='w-auto h-auto text-lg md:text-4xl mt-5 font-bold text-violet-500'>
        Framer Motion
      </div>
      <div className='flex flex-col w-[80%] gap-y-5' >
        <h1 className=' text-lg md:text-2xl font-bold font-serif text-green-700' >Animations and Gestures</h1>
        <div className='flex  md:items-start md:flex-row flex-col justify-between border-2 ' >
          <div className='w-[300px] mx-auto my-4'>
            <motion.div animate={
              { x: xaxis }
            } className=' w-[100px] h-[100px] bg-slate-400 rounded-full  '>
            </motion.div>
          </div>
          <div className='flex md:w-[40%] mx-2 my-4 md:m-4' >
            <div className='flex flex-col gap-y-4 w-full ' >
              <h3 className='text-lg font-bold' >X-axis Movement</h3>
              <input className='hover:cursor-pointer' type="range" max={200} min={0} defaultValue={xaxis} value={xaxis} onChange={(e) => setXaxis(Number(e.target.value))} />
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default App
