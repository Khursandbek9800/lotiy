import styles from "../../styles/footer/footer.module.scss";
import styles1 from "../../styles/footer/draw.module.scss";
import {FaFacebookF, FaGraduationCap, FaTelegramPlane} from "react-icons/fa"
import {GrInstagram, GrServices, GrYoutube} from "react-icons/gr";
import {IoHome} from "react-icons/io5";
import {GiWorld} from "react-icons/gi";
import {FiPhoneCall} from "react-icons/fi";
import {IoMdSettings} from "react-icons/io";
import Link from "next/link"

function Footer(props) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.social}>
                    <div className={styles.title}>
                        Bizni ijtimoiy tarmoqlarda kuzating
                    </div>
                    <div className={styles.links}>
                        <div className={`${styles1.spin1} ${styles1.circle1}`}>
                            <FaFacebookF className={styles1.icon1}/>
                        </div>
                        <a className={`${styles1.spin2} ${styles1.circle2}`}
                           href="http://instagram.com/akbarconsulting">
                            <GrInstagram className={styles1.icon2}/>
                        </a>
                        <a className={`${styles1.spin3} ${styles1.circle3}`}
                           href="https://www.youtube.com/channel/UCNe_4Kv8DA2Q00D_w6klUeg">
                            <GrYoutube className={styles1.icon3}/>
                        </a>
                        <a className={`${styles1.spin4} ${styles1.circle4}`} href="http://t.me/akbarconsulting">
                            <FaTelegramPlane className={styles1.icon4}/>
                        </a>
                    </div>
                    <div className={styles.applyWr}>
                        <Link href='/apply'>
                            <div className={styles.apply}>
                                Ariza topshirish
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.title1}>
                    Sahifalar
                </div>
                <div className={styles.menu}>
                    <IoHome className={styles.icon}/> Asosiy
                </div>
                <div className={styles.menu}>
                    <IoMdSettings className={styles.icon}/> Servislar
                </div>
                <div className={styles.menu}>
                    <GiWorld className={styles.icon}/> Davlatlar
                </div>
                <div className={styles.menu}>
                    <FaGraduationCap className={styles.icon}/> Talabalar
                </div>
                <div className={styles.menu}>
                    <FiPhoneCall className={styles.icon}/> Aloqa
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.contacts}>
                    <div className={styles.title2}>
                        Biz bilan bog'laning
                    </div>
                    <div className={styles.flex}>
                        <div className={styles.col1}>
                            <div className={styles.row}>
                                <a className={styles.two} href="tel:+99893 093 26 26">
                                    +99893 093 26 26
                                </a>
                            </div>
                            <div className={styles.row}>
                                <a className={styles.two} href="tel:+99893 093 26 26">
                                    +99893 093 27 27
                                </a>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.two}>
                                    consultation@gmail.com
                                </div>
                            </div>
                            <div className={styles.row}>
                                <a className={styles.two} href="http://t.me/akbarconsulting">
                                    @akbarconsulting
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.contacts}>
                    <div className={styles.title2}>
                        Bizning manzil
                    </div>
                    <div className={styles.flex}>
                        <div className={styles.col1}>
                            <div className={styles.row}>
                                <div className={styles.two}>
                                    Urganch shahar, Xonqa ko'chasi, Oldingi Turizm kollej binosi
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.two}>
                                    Mash'al do'koni ro'parasida
                                </div>
                            </div>
                            <div className={styles.row}>
                                <a className={styles.two} href="http://t.me/akbarconsulting">
                                    www.akbar-consulting.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;