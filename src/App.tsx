import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './app/store'
import Markpage from './components/pages/Markspage/Markpage'
import SignUp from './components/SignUp and SignIn/SignUp'
import SignIn from './components/SignUp and SignIn/SignIn'
import Mainpage from './components/pages/Mainpage/Mainpage'



const App = () => {
  const loading = useSelector((state: RootState) => state.application.loading) //взял лоадинг из слайса

  if (loading) {
    return 'loading...'
  } // функция для прогрузки лоадинга при пендинге

  return (
    <div className={styles.app}>
          <Header/>
          <Routes>
            <Route path='/marks' element={<Markpage/>}/>
            <Route path='/SignUp' element={<SignUp/>} />
            <Route path='/SignIn' element={<SignIn/>} />
            <Route path='/Catalog' element={<Mainpage/>} />
          </Routes> 
          <Footer/>
    </div>
  )
}


export default App
