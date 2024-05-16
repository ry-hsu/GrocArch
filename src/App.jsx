import { useState } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Layout'
import Home from './Home'
import Results from './Results'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="results" element={<Results/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

  // return (
  //   <>
  //   <div className="main">
  //     <h1>Shoparch</h1>
  //   </div>
  //   <div>
  //       <SearchBar />
  //   </div>
  //   </>
  // )
}

export default App
