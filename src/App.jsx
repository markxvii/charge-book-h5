import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
  Routes,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import routes from '@/router'

import {ConfigProvider} from 'zarm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ConfigProvider primaryColor={'#007fff'}>
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
    </ConfigProvider>
  )
}

export default App
