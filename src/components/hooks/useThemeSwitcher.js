import React, { useEffect, useState } from "react";

const useThemeSwitcher = ()=>{

    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode,setMode] = useState("");

    useEffect(()=>{
        const mediaQuery = window.matchMedia(preferDarkQuery);

        const handleChange=()=>{
            const userPref = window.localStorage.getItem("theme");

            if(userPref){
                const check = userPref === "dark" ? "dark" : "light";
                setMode(check);
                if(check === "dark"){
                    document.documentElement.classList.add("dark")
                }else{
                    document.documentElement.classList.remove("dark")
                }
            }else{
                const check = mediaQuery.matches ? "dark" : "light";
                setMode(check);
                window.localStorage.setItem("theme", check);
                if(check === "dark"){
                    document.documentElement.classList.add("dark")
                }else{
                    document.documentElement.classList.remove("dark")
                }
            }
        }

        handleChange();

        mediaQuery.addEventListener("change",handleChange);
        return ()=> mediaQuery.removeEventListener("change",handleChange )
    },[])


    useEffect(()=>{
        if(!mode) return;

        const isDark = mode === "dark";
        document.documentElement.classList.toggle("dark", isDark);
        window.localStorage.setItem("theme", isDark ? "dark" : "light");
    },[mode])

    return [mode,setMode]
}

export default useThemeSwitcher