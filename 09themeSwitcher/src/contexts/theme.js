import { createContext,useContext } from "react";

export const ThemeContext =createContext({
    themeMode:'light',
    darkTheme: ()=> {},  /*it is to display ki hm variable and function dono pass kr sakte h */
    lightTheme: ()=> {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}