import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './app/store'
import OneCarPage from './components/pages/OneCarPage/OneCarPage'


const App = () => {
  const [text, setText] = useState('')
  const loading = useSelector((state: RootState) => state.application.loading)

  if (loading) {
    return 'loading...'
  }

  return (
    <div className={styles.app}>
          <Header/>
          <Routes>
            <Route path="/OneCarPage/:carId" element={<OneCarPage />} />
          </Routes> 
          <Footer/>
    </div>
  )
}


export default App
