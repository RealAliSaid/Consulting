"use client";

import React from 'react';

import { useState } from "react";
import Image from 'next/image'
import Link from "next/link"

import { AiOutlineInstagram } from "react-icons/ai"
import { FaTwitterSquare, FaMailBulk } from 'react-icons/fa'
import CalendlyWidget from "./CalendlyWidget";

const LandingPage = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <section className="grid rounded-xl bg-white dark:bg-white dark:text-black shadow-2xl p-3 px-12 max-w-9xl">
            <Image
                        width={600}  
                        height={600}  
                        src="/Logo.png"  
                        alt="Company Logo"
                        style={{ alignSelf: 'center', margin: '0 auto' }}
            />
           
                <h1 className="font-semibold my-4 justify-self-center text-center text-5xl w-9/12">Videocall Beratung mit Helmut</h1> {/* Replace this with the name */}
                <div></div><br /><br /> 
                <button className="justify-self-center mb-8 bg-blue-500 dark:bg-blue-500 px-10 py-8 text-white dark:text-white text-lg font-bold w-fit rounded-full" onClick={() =>
                    setShowModal(true)
                }>
                   Jetzt einen Videocall Termin Buchen!
                </button>
                
                <div className="flex flex-col-reverse items-center gap-3 my-8 md:flex-row">
                <Image
        	            width={400}
                        height={612}
                        src="/helmut.jpg"
                        style={{ alignSelf: 'flex-start', margin: '0 auto' }}
                        alt="Owner and Consultant"
                    />   
                   
                    <p className="max-w-md text-lg">
                    Mein Name ist Helmut, ich bin 52 Jahre alt und habe acht Jahre lang als Single in Deutschland verbracht. Rechts zu sehen ist meine 23 Jährige Frau Pauline. In dieser Zeit habe ich unzählige Dates gehabt und zahlreiche Erfahrungen bei meiner Suche nach einer Lebenspartnerin gesammelt. Ich habe mich auf nahezu allen gängigen Single-Portalen wie Parship und anderen angemeldet und sogar Zeitungsinserate geschaltet, um Frauen kennenzulernen.
                    <br /><br />
                    Leider war es oft so, dass ich Schwierigkeiten hatte, mit den attraktiven Frauen in Kontakt zu treten, und am Ende blieb mir oft nur das übrig, was eigentlich kein Mann will. Wenn es doch einmal zu einem Date kam, erhielt ich oft Aussagen wie Du bist nett, aber du bist nicht mein Typ oder es funkte einfach nicht. Oft kamen auch andere Prioritäten ins Spiel, sei es die Kinder, Haustiere oder Enkelkinder, und die Partnersuche geriet in den Hintergrund.
                    <br /><br />
                    Die Frau sagte dass sie nichts gespürt hat obwohl wir uns menschlich sehr gut verstanden haben eben einen absoluten dachschaden und sich somit eben nicht verlieben konnte
                    <br /><br />
                    Ich wollte nicht länger alleine sein und suchte nach einer Frau, die mir gefiel. So kam mir die Idee, im Ausland nach meiner Lebenspartnerin zu suchen. Ich war selbstkritisch und mir bewusst, dass ich mit 52 Jahren und durchschnittlichem Aussehen keine großen Reichtümer besaß, dass ich gerade so in Deutschland leben kann.
                    <br /><br />
                    Deshalb entschied ich mich, in einem Land zu suchen, in dem Armut herrschte, und stieß auf Kenia. Dort lernte ich im Handumdrehen viele Frauen im Alter von 18 bis 30 Jahren kennen, die alle an mir interessiert waren. Das Thema Frauen aus Kenia beschäftigt mich nun schon fast zwei Jahre, und ich habe viel über das Land und seine Menschen erfahren.
                    <br /><br />
                    Falls auch Sie daran interessiert sind, eine attraktive Frau aus Kenia kennenzulernen und von meinen Erfahrungen zu lernen, lade ich Sie herzlich zu einem Videochat ein. In diesem Gespräch erkläre ich Ihnen alles im Detail. Selbst wenn Sie über 60 Jahre alt sind, habe ich eine 25-jährige Frau für Sie, damit auch Sie bald in glücklicher Zweisamkeit leben können, so wie ich es heute tue. Ich bin glücklich verheiratet mit einer Traumfrau aus Kenia.
                    <br /><br />
                     </p> 
                     <Image
        	            width={400}
                        height={612}
                        src="/frau.jpg"
                        style={{ alignSelf: 'flex-start', margin: '0 auto' }}
                        alt="Frau von Helmut"
                    />    
                    
                </div>

                <button className="justify-self-center mb-8 bg-blue-500 dark:bg-blue-500 px-10 py-8 text-white dark:text-white text-lg font-bold w-fit rounded-full" onClick={() =>
                    setShowModal(true)
                }>
                   Jetzt einen Videocall Termin Buchen!
                </button>
                {showModal &&
                    <div className="absolute inset-0 grid justify-center">
                        <div className="modal-container" onClick={() => setShowModal(false)}></div>
                        <CalendlyWidget showModal={showModal} setShowModal={setShowModal} />
                    </div>

                }
           
                
            </section>
            <div className="svg-container">
                <Image width={100} height={86} src="/triangle.svg" alt="triangle background" />
                <Image width={100} height={86} src="/circle.svg" alt="triangle background" />
                <Image width={100} height={86} src="/square-fill.svg" alt="triangle background" />
                <Image width={100} height={86} src="/circle-fill.svg" alt="triangle background" />
                <Image width={100} height={86} src="/square.svg" alt="triangle background" />
            </div>
            <footer className="text-sm text-center">
             
            <a href="/AGB.pdf" download style={{ marginRight: '10px' }}>
                AGB Herunterladen
            </a>
            </footer>
        </>
    )
}

export default LandingPage