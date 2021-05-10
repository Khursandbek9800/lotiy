import styles from "../../styles/header/header.module.scss"
import {GiHamburgerMenu} from "react-icons/gi";
import React from "react";
import Link from "next/link"

function Header({func1, func2, func3, func4, func5, func6, num, onPress1, bool1}) {
    console.log(num)
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <img src="/home/logoJpg.jpg" alt="" className={styles.img}/>
                </div>
                <div className={styles.link}>
                    <Link href={'/'}>
                        <div onClick={func1} className={`${styles.menu} ${num === 1 ? styles.another : ""}`}>
                            Asosiy
                        </div>
                    </Link>
                    <Link href={'/'}>
                        <div onClick={func2} className={`${styles.menu} ${num === 2 ? styles.another : ""}`}>
                            Davlatlar
                        </div>
                    </Link>
                    <Link href={'/'}>
                        <div onClick={func3} className={`${styles.menu} ${num === 3 ? styles.another : ""}`}>
                            Talabalar
                        </div>
                    </Link>
                    <Link href={'/'}>
                        <div onClick={func4} className={`${styles.menu} ${num === 4 ? styles.another : ""}`}>
                            Servislar
                        </div>
                    </Link>
                    <Link href={'/'}>
                        <div onClick={func5} className={`${styles.menu} ${num === 5 ? styles.another : ""}`}>
                            Savollar
                        </div>
                    </Link>
                    <Link href={'/'}>
                        <div onClick={func6} className={`${styles.menu} ${num === 6 ? styles.another : ""}`}>
                            Aloqa
                        </div>
                    </Link>
                    <a href="tel:+99893 093 27 27" className={styles.menu}>
                        +99893 093 27 27
                    </a>
                </div>
                <div className={styles.sidebarToggle}>
                    <GiHamburgerMenu className={styles.sidebarIcon}/>
                </div>
            </div>
        </div>
    );
}

export default Header;