import React, { FunctionComponent, HTMLAttributes, ReactNode, useRef, useState } from "react"

// Production SCSS
import '../styles/pages/home.scss'

// Autoprefixed CSS
// import './css/styles.min.css'

// Remove And Add Class In The Click Of A Button
type SectionProps = HTMLAttributes<HTMLElement>&{children: ReactNode, show: boolean, hideClass: string}

const Section: FunctionComponent<SectionProps> = ({ 
    children,
    hideClass,
    show,
    className,
    ...rest
}) => {
    return (
        <section className={`${className} ${show ? hideClass : ''}`} {...rest}>
            {children}
        </section>
    )
}

// Carousel Logic
const buttons = document.querySelectorAll('[data-carousel-button]')

export function HomeRevamp() {
    const [showClass, setShowClass] = useState(false)

    function Buttons(button: HTMLButtonElement) {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest('[data-carousel]')!.querySelector<HTMLElement>('[data-slides]')!
    
        const activeSlide = slides.querySelector('[data-active]')!
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides?.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
    
        // @ts-ignore
        slides.children[newIndex].dataset.active = true
        // @ts-ignore
        delete activeSlide.dataset.active
    }

    return (
        <>
        <main className="main"> 
            <Section className="main-section" show={showClass} hideClass='hideHome'>
                <div className={`hero-wrapper ${showClass ? 'hideHero': ''}`}>
                    
                    <div className="frame-wrapper">
                        <div className="fw-550 modern-frame span-two-columns">
                            <img src="./assets/ib/fabricated-world.png" alt="" />
                        </div>
                        <div className="ld-red-200 modern-frame">
                            <img src="./assets/ib/lady-in-red-modified.png" alt="" />
                        </div>
                        <div className="pfr-200 modern-frame">
                            <img src="./assets/ib/promise-of-reunion.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="south-button classic-buttons">
                    <button className="down-arrow" onClick={() => setShowClass(true)}>
                        <span className="edge"></span>
                        <span className="arrow"><img src="./assets/arrows/arrow-fat-down-fill.svg"/></span>
                    </button>                
                </div>
            </Section>

            <section className={`gallery-section ${showClass ? 'showGallery': ''}`} id="gallerySection">

                <div data-carousel className="slides-wrapper carousel">

                    <div data-slides className={`slide-show-wrapper ${showClass ? 'showSlides': ''}`}>

                        <div data-active className="slide-show first-slide">
                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/pizza.jpg" alt="" />
                            </div>

                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/angel.jpg" alt="" />
                            </div>

                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/anxious.jpg" alt="" />
                            </div>

                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/cute-cheesy-hair.jpg" alt="" />
                            </div>

                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/female-yasuo.jpg" alt="" />
                            </div>
                        </div>

                        <div className="slide-show second-slide">

                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/fire-flex.jpg" alt="" />
                            </div>

                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/yasuo-flute.jpg" alt="" />
                            </div>

                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/tired-but-firm.jpg" alt="" />
                            </div>

                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/xayah-chibi.jpg" alt="" />
                            </div>

                            <div className="modern-frame">
                                <img className="frame-image" src="./assets/regular/gary.jpg" alt="" />
                            </div>
                        </div>
                    </div>
             
                    <div className="west-east-buttons classic-buttons">
                        <button onClick={(event) => Buttons(event.currentTarget)} data-carousel-button="prev">
                            <span className="edge"></span>
                            <span className="left-arrow arrow"><img src="./assets/arrows/arrow-fat-left-fill.svg" alt="" /></span>
                        </button>

                        <button onClick={(event) => Buttons(event.currentTarget)} data-carousel-button="next">
                            <span className="edge"></span>
                            <span className="right-arrow arrow"><img src="./assets/arrows/arrow-fat-right-fill.svg" alt="" /></span>
                        </button>
                    </div>
                </div>
              
            </section>
        {/* <img className="button-left prev" src="./assets/arrows/circle-arrow-left-solid.svg" alt="" /> */}
        {/* <img className="button-right next" src="./assets/arrows/circle-arrow-right-solid.svg" alt="" /> */}
        </main>
        </>
    )
}