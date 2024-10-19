import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

const lightTheme=()=>{
  setThemeMode("light")
}
const darkTheme=()=>{
  setThemeMode("dark")
}
//actual change in theme
//jitni bhi cheeze html mein h with light or dark sabko remove krdenge hm , kyunki hme ab naya vala add krna h
useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])
// dependency h hmari themeMode ke upper ki jaise jaise yeh change hoga hme useEffect run krna h


  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
  <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
    </div>
  </div>
  </ThemeProvider>
  )
}

export default App
