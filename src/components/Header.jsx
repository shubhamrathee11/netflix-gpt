import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { signOut } from 'firebase/auth'
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const handleSignOut = () => {
      signOut(auth) 
        .then(() => {
          
        })
        .catch((error) => {
          navigate("/error")
        })
    }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName} = user;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
          navigate("/browse")
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });
},[]);

  return (
    <>
    <div className='flex w-screen absolute pl-10 pt-3 bg-gradient-to-b from-black z-20 h-13'>
        <img src= {LOGO} alt='logo'/>
    </div>
     <div className='flex'>
     <button 
       className='absolute ml-310 mt-3 text-xl border-2 px-1.5 pb-1 rounded-2xl cursor-pointer z-100 text-amber-50 flex' 
       onClick={handleSignOut}
     >
       Sign Out
     </button>
   </div>
   </>
  )
}

export default Header