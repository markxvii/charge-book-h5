import React, {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
  Routes,
  Route, BrowserRouter, useLocation
} from "react-router-dom";
import routes from '@/router'

import {ConfigProvider} from 'zarm'
import NavBar from "@/components/NavBar/index.jsx";

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation()
  const {pathname} = location
  const needNav = ['/', '/data', '/user']
  const [showNav, setShowNav] = useState(false)
  useEffect(() => {
    setShowNav(needNav.includes(pathname))
  }, [pathname])

  return (
    <ConfigProvider primaryColor={'#007fff'}>
      <>
        <Routes>
          {
            routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component/>}
                />
              )
            })
          }
        </Routes>
        <NavBar showNav={showNav}/>
      </>
    </ConfigProvider>
  )
}

export default App
