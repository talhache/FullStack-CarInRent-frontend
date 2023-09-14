// import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './app/store'
import OneCarPage from './components/pages/OneCarPage/OneCarPage'
import Markpage from './components/pages/MarksPage/Markpage'
import SignUp from './components/SignUp and SignIn/SignUp'
import SignIn from './components/SignUp and SignIn/SignIn'
import Mainpage from './components/pages/CatalogPage/Catalog'
import Homepage from './components/pages/HomePage/Homepage'
import Profile from './components/Profile/Profile'
import OneMarkPage from './components/pages/OneMarkPage/OneMarkPage'
import CompareCar from './components/pages/CompareCarePage/CompareCar'


const App = () => {
  const loading = useSelector((state: RootState) => state.application.loading) //взял лоадинг из слайса

  if (loading) {
    return 'loading...'
  } // функция для прогрузки лоадинга при пендинге

  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/marks/:markId' element={<OneMarkPage/>} />
        <Route path="/cars/:carId" element={<OneCarPage />} />
        <Route path='/marks' element={<Markpage />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/Catalog' element={<Mainpage />} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/cars/compare' element={<CompareCar/>}/>
      </Routes>
      <Footer />
    </div>
  )
}


export default App
