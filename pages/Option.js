import React from 'react'
import { Button} from '@nextui-org/react'
import { useRouter } from 'next/router'
const Option = () => {
    const router = useRouter();
    const handleAggregatorclick = () =>{
        router.push('http://localhost:3000/Dashboard');

    };

    const handleUserclick = () =>{
        router.push('http://localhost:3000/Dashboard');

    }


  return (
   <>
   
    
    <div className="bg-customColor flex items-center justify-center h-screen">

    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">

  <Button className = "mx-6" onClick={handleAggregatorclick}>Aggregator</Button>
    <Button onClick={handleUserclick}>User</Button>

  </div>
  </div>

    
   </>
  )
}

export default Option