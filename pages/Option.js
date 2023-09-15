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
   <div className='flex'>
    <Button onClick={handleAggregatorclick}>Aggregator</Button>
    <Button onClick={handleUserclick}>User</Button>
    </div>
   </>
  )
}

export default Option