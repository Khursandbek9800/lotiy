import styles from "../../../styles/home/section-5/section-5.module.scss";
import {FiPhoneCall} from "react-icons/fi"
import {AiOutlineMail} from "react-icons/ai";
import {IoLocationOutline} from "react-icons/io5";
import {FaTelegramPlane} from "react-icons/fa";
import Ymap from "./map/map";

function Section5(props) {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.cTitle}>
                    Biz bilan bog'laning
                </div>
            </div>
            <div className={styles.an}>
                <div className={styles.contacts}>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <FiPhoneCall/> Telefon
                        </div>
                        <a className={styles.right} href="tel:+99893 093 26 26">
                            +99893 093 26 26
                        </a>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <AiOutlineMail/> Email
                        </div>
                        <div className={styles.right}>
                            consultation@gmail.com
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <IoLocationOutline/> Adress
                        </div>
                        <div className={styles.right}>
                            Urganch sh, Xonqa, eski Turizm kolleji
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <FaTelegramPlane/> Telegram
                        </div>
                        <a className={styles.right} href="http://t.me/akbarconsulting">
                            @akbarconsulting
                        </a>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.text}>
                        Istalgan Vaqt Email Yoki Telegram Orqali Bog’lanishingiz Mumkin.
                    </div>
                </div>
                <div className={styles.mapWr}>
                    <Ymap/>
                </div>
            </div>
        </div>
    );
}

export default Section5;