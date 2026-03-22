import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import resumind from "../../public/images/projects/resumind.png";
import algorithmVisualiser from "../../public/images/projects/algorithmVisualiser.png";
import sweet from "../../public/images/projects/sweet.png";
import testify from "../../public/images/projects/testify.png";
import workForce from "../../public/images/projects/workForce.png";
import {motion} from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject =({type,title,summary,img,link,github})=>{
    return(
        <article className="w-full flex items-center justify-between rounded-3xl relative rounded-br-2xl
                            border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light" >
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light " />

            <Link href={link} target="_blank"
            className="w-1/2 cursor:pointer overflow-hidden rounded-lg">
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                 priority
                sizes="(max-width: 768px)100vw,
                (max-width: 1200px)50vw,
                50vw"
                />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
                <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light ">{summary}</p>
                <div className="my-2 flex items-center ">
                    <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark 
                    text-light p-2 px-6 text-lg font-semibold dark:text-dark dark:bg-light"
                    >Visit Project</Link>

                </div>
            </div>
        </article>
    )
}


const Project = ({type,title,img,link,github})=>{
    return(
        <article className="w-full flex flex-col items-center justify-center rounded-2xl
                            border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl " />

            <Link href={link} target="_blank"
            className="w-full cursor:pointer overflow-hidden rounded-lg">
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
                </Link>
                <div className="w-full my-2 flex items-center justify-between ">
                    <Link href={link} target="_blank" className="underline
                    text-lg font-semibold"
                    > Visit</Link>
                    <Link href={github} target="_blank" className="w-8"><GithubIcon /></Link>
                    

                </div>
            </div>
        </article>
    )
}


const projects =()=>{
    return (
        <>
        <Head>
                <title>iamashishkundu | projects Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16"/>
                <div className="grid grid-cols-12 gap-24 gap-y-32" >
                    <div className="col-span-12">
                       <FeaturedProject 
                       type="Featured Project"
                       title="Testify – Full-Stack EdTech Platform"
                       summary="A scalable EdTech platform serving 500+ users with course management, quizzes,
                        and progress tracking. Built with Google OAuth, JWT authentication, role-based access 
                        control, and Stripe payments."
                        link="https://testify-coral.vercel.app/"
                        github="https://github.com/iamashishkundu/testify"
                        img={testify} />
                    </div>
                    <div className="col-span-6">
                        <Project 
                       type="Project"
                       title="Algorithm Visualizer"
                        link="https://github.com/iamashishkundu/algorithms_visualiser"
                        github="https://github.com/iamashishkundu/algorithms_visualiser"
                        img={algorithmVisualiser} />
                    </div>
                    <div className="col-span-6">
                       <Project 
                       type="Project"
                       title="Workforce360"
                        link="https://workforce360-taupe.vercel.app/login"
                        github="https://github.com/iamashishkundu/workforce360"
                        img={workForce} />
                    </div>
                     <div className="col-span-12">
                        <FeaturedProject 
                       type="Featured Project"
                       title="Resumind – AI Resume Analyzer"
                       summary="An AI-powered ATS resume scoring tool that provides real-time skill gap analysis and
                        improvement suggestions. Features PDF upload, parsing, and instant feedback with a responsive
                         Tailwind CSS UI."
                        link="https://github.com/iamashishkundu/resumind"
                        github="https://github.com/iamashishkundu/resumind"
                        img={resumind} />
                    </div>
                     <div className="col-span-6">
                        <Project 
                       type="Project"
                       title="Sweet Shop Management System"
                        link="https://sweet-ten.vercel.app/"
                        github="https://github.com/iamashishkundu/Sweet-Management"
                        img={sweet} />
                    </div>
                    <div className="col-span-6">
                        <Project 
                       type="Project"
                       title="Codehive"
                        link="https://github.com/iamashishkundu/codehive"
                        github="https://github.com/iamashishkundu/codehive"
                        img={project1} />
                    </div>
                   </div>
                </Layout>
            </main>
        </>
    )
}

export default projects