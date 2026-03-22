import React from "react";
import { motion } from "framer-motion";

const Skill = ({name,x,y})=>{
    return(
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6
        shadow-dark cursor-pointer absolute  dark:bg-light dark:text-dark 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold "
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y,transition: {duration: 1.5}}}
        viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}

const Skills = ()=>{
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark ">
                <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6
                    shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2 "
                    whileHover={{scale:1.05}}
                    >
                    Web
                </motion.div>
                <Skill name="HTML5" x="-26vw" y="2vw" />
                <Skill name="CSS3" x="-37vw" y="-8vw" />
                <Skill name="NextJS" x="-5vw" y="-11vw" />
                <Skill name="Javascript" x="20vw" y="10vw" />
                <Skill name="Polygon" x="38vw" y="6vw" />
                <Skill name="ReactJS" x="0vw" y="11vw" />
                <Skill name="Git" x="-7vw" y="23vw" />
                <Skill name="TypeScript" x="-20vw" y="-15vw" />
                <Skill name="Node.js" x="16vw" y="-12vw" />
                <Skill name="Express.js" x="32vw" y="-5vw" />
                <Skill name="Solidity" x="0vw" y="-19vw" />
                <Skill name="MongoDB" x="-22vw" y="15vw" />
                <Skill name="Tailwind CSS" x="17vw" y="21vw" />
               
            </div>
        </>
    )
}

export default Skills;