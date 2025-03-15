import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../utils/firebase'

const Login = () => {
    const [isSignInForm, setSignInFOrm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        console.log(email.current.value);
        console.log(password.current.value);

        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;

        if(!isSignInForm){
          // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)

           .then((userCredential) => {
             const user = userCredential.user;
             console.log(user);
          })

           .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
  });
        } else {
          // Sign In Logic
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          
  })
          .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
  });
        }
    }

    const toggleSignInForm = () => {
        setSignInFOrm(!isSignInForm);
    }
  return (
    <div className='flex flex-wrap'>
        <Header/>
        <div className='absolute z-0'>
         <img className= 'w-400 h-screen object-cover' src='https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg' alt='img'/>
        </div>
        <div>
            <form className='absolute z-10 bg-black opacity-80 py-15 rounded-lg mx-auto right-0 left-0 mt-32 w-65 text-white' onSubmit={(e)=>{e.preventDefault()}}>

                <h1 className='font-bold text-3xl ml-4 mb-3'>{ isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && <input 
                placeholder='Enter Full Name' 
                type='text' 
                className='bg-gray-600 m-1.5 w-57
                rounded-lg p-2 ml-4 mr-4 mt-3 '/>}

                <input 
                ref={email}
                placeholder='Enter Email' 
                type='text' 
                className='bg-gray-600 m-1.5 w-57
                rounded-lg p-2 ml-4 mr-4 mt-3 '/>

                <input 
                ref={password}
                placeholder='Password' 
                type='Password' 
                className='bg-gray-600 rounded-lg m-1.5 p-2 w-57 ml-4 mr-4 mt-3'/>

                <p className='text-red-600 ml-4'>{errorMessage}</p>

                <button className='m-1.5 bg-red-600 py-1 px-2 w-57 ml-4 mr-4 mt-4 rounded-lg cursor-pointer' onClick={handleButtonClick}>{ isSignInForm ? "Sign In" : "Sign Up" }</button>

                <p className='py-4 ml-4 cursor-pointer' onClick={toggleSignInForm}>{ isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now" }</p>
            </form>
        </div>
    </div>
  )
}

export default Login