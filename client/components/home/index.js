import Section1 from "./section-1/section-1";
import Section2 from "./section-2/section-2";
import Section3 from "./section-3/section-3";
import Section4 from "./section-4/section-4";
import Section5 from "./section-5/section-5";
import Footer from "../footer/footer";
import Services from "./services/services";
import React, {useState, useRef, useEffect} from "react";
import window from "global/window";
import {AiOutlineArrowUp} from "react-icons/ai";
import FAQ from "../faq/index";


function Home() {
    const linkToTop = useRef(null);
    const linkToTop1 = useRef(null);
    const linkToTop2 = useRef(null);
    const linkToTop3 = useRef(null);
    const linkToTop4 = useRef(null);
    const linkToTop5 = useRef(null);
    const linkToTop6 = useRef(null);
    const [num,setNum] = useState(1);

    const [bool, setBool] = useState(false);

    function getPageYOffSet() {
        if (window !== undefined) {
            return window.pageYOffset;
        } else {
            return 0;
        }
    }

    const [offTop, setOffTop] = useState(getPageYOffSet());

    useEffect(() => {
        if (window !== undefined) {
            window.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (window !== undefined) {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    function handleScroll() {
        setOffTop(getPageYOffSet);
    }
    const onScrollToTop = () =>{
        linkToTop.current.scrollIntoView({
            behavior: "smooth",
        });
    }
    const onScrollToTop1 = () => {
        linkToTop1.current.scrollIntoView({
            behavior: "smooth",
        });
        setNum(1)
    }
    const onScrollToTop2 = () => {
        linkToTop2.current.scrollIntoView({
            behavior: "smooth",
        });
        setNum(2)
    }
    const onScrollToTop3 = () => {
        linkToTop3.current.scrollIntoView({
            behavior: 'smooth',
        });
        setNum(3)
    }
    const onScrollToTop4 = () => {
        linkToTop4.current.scrollIntoView({
            behavior: 'smooth',
        });
        setNum(4)
    }
    const onScrollToTop5 = () => {
        linkToTop5.current.scrollIntoView({
            behavior: 'smooth',
        });
        setNum(5)
    }
    const onScrollToTop6 = () => {
        linkToTop6.current.scrollIntoView({
            behavior: 'smooth',
        });
        setNum(6)
    }
    const onScrollToTop7 = () => {
        linkToTop7.current.scrollIntoView({
            behavior: 'smooth',
        });
        setNum(7)
    }
    useEffect(() => {
        for (var i = 0; i < 100; i++) {
            if ((Math.floor(parseFloat(offTop,10))+i) === parseFloat(linkToTop1.current.offsetTop,10)){
                setNum(1)
            }
            if ((Math.floor(parseFloat(offTop,10))+i) === parseFloat(linkToTop2.current.offsetTop,10)){
                setNum(2)
            }
            if ((Math.floor(parseFloat(offTop,10))+i) === parseFloat(linkToTop3.current.offsetTop,10)){
                setNum(3)
            }
            if ((Math.floor(parseFloat(offTop,10))+i) === parseFloat(linkToTop4.current.offsetTop,10)){
                setNum(4)
            }
            if ((Math.floor(parseFloat(offTop,10))+i) === parseFloat(linkToTop5.current.offsetTop,10)){
                setNum(5)
            }
            if ((Math.floor(parseFloat(offTop,10))+i) === parseFloat(linkToTop6.current.offsetTop,10)){
                setNum(6)
            }
        }
    })
    return (
        <>
            <a href="top" ref={linkToTop}/>
            <Section1
                num={num}
                func1={onScrollToTop1}
                func2={onScrollToTop2}
                func3={onScrollToTop3}
                func4={onScrollToTop4}
                func5={onScrollToTop5}
                func6={onScrollToTop6}
                func7={onScrollToTop7}
                onPress1 = {setBool}
                bool1={bool}
                linkToTop1={linkToTop1}
            />
            <a href="top" ref={linkToTop2}/>
            <Section2/>
            <a href="top" ref={linkToTop3}/>
            <Section3
                text1={"Davlatlar"}
                num1={6}
                text2={"Universitetlar"}
                num2={50}
                text3={"Talabalar"}
                num3={800}
                button = {"Batafsil"}
                link={'/universities'}
            />
            <Section4/>
            <hr/>
            <a href="top" ref={linkToTop4}/>
            <Services/>
            <a href="top" ref={linkToTop5}/>
            <FAQ num={8}/>
            <a href="top" ref={linkToTop6}/>
            <Section5/>
            <Footer/>
            <div onClick={onScrollToTop}
                 className="scroll"
                 style={{
                     display: `${offTop > 400 ? "flex" : "none"}`
                 }}
            ><AiOutlineArrowUp className="icon"/>

            </div>
        </>
    );
}

export default Home;