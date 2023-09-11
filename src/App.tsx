import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './app/store'
import SignUp from './components/SignUp and SignIn/SignUp'
import SignIn from './components/SignUp and SignIn/SignIn'



const App = () => {
  const loading = useSelector((state: RootState) => state.application.loading) //взял лоадинг из слайса

  if (loading) {
    return 'loading...'
  } // функция для прогрузки лоадинга при пендинге

  return (
    <div className={styles.app}>
          <Header/>
          <Routes>
            <Route path='/Marks'/>
            <Route path='/SignUp' element={<SignUp/>} />
            <Route path='/SignIn' element={<SignIn/>} />
          </Routes> 
          <Footer/>
    </div>
  )
}


export default App
