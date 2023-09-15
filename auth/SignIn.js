import React from 'react'
import supabase from './SupabaseClient'
import { Button } from '@nextui-org/react';
import { useState, useEffect } from 'react'
const SignIn = () => {
    const handleSignIn = async(e) => {
        e.preventDefault();
        try{
            const {data,error} = await supabase.auth.signInWithOAuth({
                provider: "google",

                options: {
                    queryParams:{
                        access_type: "offline",
                        prompt: "consent",
                    },
                    redirectTo: "http://localhost:3000/Option",
                }

            })
        } catch (error) {
            console.log(error);
        } alert("Wrong Email or Password!");
    }   
  return (
    <>
<div className="bg-customColor flex items-center justify-center h-screen">
  <div className='bg-[#180828]'>
    <Button onClick={handleSignIn}>SIGN UP WITH GOOGLE</Button>
  
  </div>
</div>

    </>
  )
}

export default SignIn