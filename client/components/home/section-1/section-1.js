import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import styles from "../../../styles/home/section-1/section-1.module.scss";
import {AiOutlineArrowRight} from "react-icons/ai"
import {connect} from "react-redux";
import {getAll, UNChange} from "../../redux/reducers/reducer/universities";
import {useEffect, useState} from "react";
import window from "global";
import { useMediaQuery } from 'react-responsive';
import React from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import Link from "next/link"



function Section1({func1, func2, func3, func4, func5,func6, num, onPress1, bool1,linkToTop1}) {
    const isResponsive = useMediaQuery({ query: '(max-width: 1350px)' });

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

     const stylesHeader = {
         top:`${offTop > 120  || isResponsive ? "0" : "40px"}`,
         zIndex:"21",
         width:`${offTop > 120 || isResponsive  ? "100%":"80%"}`,
         marginLeft:`${offTop > 120 || isResponsive  ? "0%":"10%"}`
     }
    const data = [
        {
            id: 1,
            title: "Chet el nufuzli oliygohlarida o'qish",
            text: "bizda oson va kafolatlangan",
            ariza: "Ariza",
            img: "slide1"
        },
        {
            id: 2,
            title: "Imtihonsiz talaba bo'lish imkoniyati",
            text: "buni qo'ldan boy bermang",
            ariza: "Ariza",
            img: "slide2"
        },
        {
            id: 3,
            title: "Masofadan turib hujjat topshiring",
            text: "qolganini bizga qo'yib bering",
            ariza: "Ariza",
            img: "slide3"
        },
    ]
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        pauseOnHover: false
    };
    return (
        <div className={styles.container}>
            <div className={styles.header} style={stylesHeader}>
                <div>
                    <img src="/home/logoJpg.jpg" alt="" className={styles.img}/>
                </div>
                <div className={styles.link}>
                    <div  onClick={func1} className={`${styles.menu} ${num === 1 ? styles.another : ""}`}>
                        Asosiy
                    </div>
                    <div onClick={func2} className={`${styles.menu} ${num === 2 ? styles.another : ""}`}>
                        Davlatlar
                    </div>
                    <div onClick={func3} className={`${styles.menu} ${num === 3 ? styles.another : ""}`}>
                        Talabalar
                    </div>
                    <div  onClick={func4} className={`${styles.menu} ${num === 4 ? styles.another : ""}`}>
                        Servislar
                    </div>
                    <div  onClick={func5} className={`${styles.menu} ${num === 5 ? styles.another : ""}`}>
                        Savollar
                    </div>
                    <div onClick={func6} className={`${styles.menu} ${num === 6 ? styles.another : ""}`}>
                        Aloqa
                    </div>
                    <a href="tel:+99893 093 27 27" className={styles.menu}>
                        +99893 093 27 27
                    </a>
                </div>
                <div className={styles.sidebarToggle}>
                    <GiHamburgerMenu className={styles.sidebarIcon}/>
                </div>
            </div>
            <a href="top" ref={linkToTop1}/>
            <Slider {...settings}>
                {
                    data.map((i, k) => {
                        return (
                            <div key={k}>
                                <div className={styles.sliderWrapper}
                                     style={{backgroundImage: `url('/home/${i.img}.jpg')`}}
                                >
                                    <div className={styles.contentWrapper}>
                                        <div className={styles.title}>
                                            {i.title}
                                        </div>
                                        <div className={styles.text}>
                                            {i.text}
                                        </div>
                                        <Link href={"/apply"}>
                                        <div className={styles.apply}>
                                            <div className={styles.textApply}>
                                                Ariza berish
                                            </div>
                                            <div className={styles.iconWr}>
                                                <AiOutlineArrowRight className="fa-arrow-right2"/>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

const mapStateToProps = (state) => ({
    country: state.sidebar.country
});

export default connect(
    mapStateToProps,
    {UNChange, getAll}
)(Section1);