import React from 'react';
import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { ResumeCard } from '@/components/resume-card';
import { ProjectCard } from "@/components/project-card";
import { DATA } from './data/resume';
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import Navbar from '@/components/navbar';
import { TooltipProvider } from '@/components/ui/tooltip';






const BLUR_FADE_DELAY = 0.04;


export default function Home() {
  return (
   

        <div className="bg-white text-black font-sans">
        
          <header className="py-8 px-4">
            
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Hello,</h1>
              
            </div>
            <div id = "Nav" className='z-20'>
              <TooltipProvider delayDuration={0}>
            <Navbar />
              </TooltipProvider>
            </div>
            <h2 className="text-4xl font-bold mt-4">I AM SOFTWARE DEVELOPER</h2>
            <p className="text-lg mt-2">Professional UX & UI Web Designer & Graphic Designer.</p>
            
            <div className="">
             

              
            </div>
            
          </header>
    
          
          <main className="container mx-auto py-16 flex flex-col min-h-[100dvh] space-y-10 "> 
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="rounded-lg shadow-lg p-6">
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
              
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D35AQH2NY7iUDHXOw/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1733918101844?e=1743062400&v=beta&t=Fe85zZG7OK2hZco0MbP2Syx-rxcrADi_zU3UsaxOdl8"
                  className=" flex rounded-full w-40 h-40 mx-auto mb-4  "
                  height={5}
                  width={4}
                />
              
               <span className="inline-block text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none opacity: 1; filter: blur(0px); transform: translateY(-8px) translateZ(0px);">
               
               <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name} 👋`}
              />
              </span>
                
              <BlurFade delay={BLUR_FADE_DELAY * 1}>
              <h2 className="text-xl font-bold">About</h2>
              </BlurFade>
                
                <BlurFadeText
                className="max-w-[600px] md:text-lg"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
                <ul className="list-disc pl-6 mb-4">
                  <li>Name: Ankit Kumar</li>
                  <li>Address: Chhatisagarh , india</li>
                  <li className='hover:underline'><a href='mailto:ankitkumar341.ak@gmail.com'>E-mail: ankitkumar341.ak@gmail.com</a></li>
                  <li>Phone: +91 xxxxxxxx</li>
                </ul>
                <div className="flex justify-center space-x-4">
                  <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full">
                    Download Resume
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full">
                    Hire Me
                  </button>
                </div>
                </BlurFade>
              </div>
            
    
              <div className="rounded-lg shadow-lg p-6">
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h3 className="text-2xl font-bold mb-4">My Services</h3>
                <p className="mb-4">
                  Lorem ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-slate-300 rounded-lg p-4 flex flex-col items-center justify-center">
                    <i className="fas fa-code text-3xl mb-2"></i>
                    <h4 className="text-lg font-bold">Web Development</h4>                    
                   
                  </div>
                  <div className="bg-slate-300 rounded-lg p-4 flex flex-col items-center justify-center">
                    <i className="fas fa-pencil-alt text-3xl mb-2"></i>
                    <h4 className="text-lg font-bold">Web Design</h4>
                  </div>
                  <div className="bg-slate-300 rounded-lg p-4 flex flex-col items-center justify-center">
                    <i className="fas fa-mobile-alt text-3xl mb-2"></i>
                    <h4 className="text-lg font-bold">App Development</h4>
                  </div>
                  
                  <div className="bg-slate-300 rounded-lg p-4 flex flex-col items-center justify-center">
                    <i className="fas fa-code-branch text-3xl mb-2"></i>
                    <h4 className="text-lg font-bold">UI/UX Design</h4>
                  </div>
                
                  <div className="bg-slate-300 rounded-lg p-4 flex flex-col items-center justify-center">
                    <i className="fas fa-share-alt text-3xl mb-2"></i>
                    <h4 className="text-lg font-bold">Social Media</h4>
                  </div>
                  
                </div>
                </BlurFade>
              </div>

          
               </section>

               <div className="min-h-screen bg-background font-sans font-semibold  antialiased space-y-12 max-w-10xl mx-auto py-12 sm:py-24 px-6 ">
                
             
              <section id="work" >
                <div className="flex min-h-0 flex-col  gap-y-3 ">
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                 <h2 className="text-3xl font-bold -translate-y-5 ">Work Experience</h2>
                
                 </BlurFade >
                 
                  {DATA.work.map((work, id) => (
                 <BlurFade
                   key={work.company}
                   delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard 
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
               
               />
                 </BlurFade>
                 ))}
              
                 
               </div>
              </section>
              <section id="education" >
               <div className="flex min-h-0 flex-col gap-y-3">
                  <BlurFade delay={BLUR_FADE_DELAY * 7}>
                     <h2 className="text-3xl font-bold">Education</h2>
                  </BlurFade>
            {DATA.education.map((education, id) => (
                <BlurFade
              key={education.College}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                >
              <ResumeCard
                key={education.College}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.College}
                title={education.College}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                  />
                </BlurFade>  ))}
               </div>
            </section>
            <section id="skills">
           <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <h2 className="text-xl font-bold">Skills</h2>
               </BlurFade>
                <div className="flex flex-wrap gap-1">
                {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill} className="bg-black text-white px-2 py-1 rounded-full text-lg">{skill}</Badge>
                </BlurFade>
            ))}
          </div>
          </div>
          </section>
          <section id="project">
            <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className=" flex flex-col items-center text-sm text-center justify-center">
              <div className="space-y-4">
              <div className="inline-block rounded-lg bg-foreground text-background bg-blue-600 px-3 py-1 text-2xl" >
              My Project
              </div>
              <h2 className=" text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
              </div>

            </BlurFade>
            <div className="grid grid-cols-1 gap-3  sm:grid-cols-3 max-w-[800px] mx-auto">
             
               {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
            </div>
            </div>

          </section>
          <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center  md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block bgslate-300 rounded-lg bg-foreground text-background px-3 py-1 text-2xl ">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on Linkedin
                </Link>{""}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
            
          
         </div>
        
            
    
           
          </main>
          
         
    
          <footer className="bg-slate-300 py-8 px-4 mt-16 text-center justify-center">
            <p className="text-sm">© 2024-25 Ankit Kumar. All rights reserved.</p>
          </footer>
         
        </div>
      );
    }
  
