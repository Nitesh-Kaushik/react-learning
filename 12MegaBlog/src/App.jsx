
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  
  // console.log(conf.appwriteCollection);
  // console.log(conf.appwriteUrl);
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error('Failed to fetch user:', error);
        dispatch(logout());
      } finally {
        setLoading(false);
      }

      };
      fetchUser();
      }  , [dispatch])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between
    bg-gray-400'>
        <div className='w-full block'>
          <Header />
          <main>
            Todo: <Outlet /> 
          </main>
        </div>
    </div>
  ) : null 
}

export default App
