import styles from "../../../styles/home/section-3/section-3.module.scss";
import {FaUniversity} from "react-icons/fa"
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import Link from "next/link"


function Section3({text1, num1, text2, num2, text3, num3, button,link}) {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.box1}>
                        <FaUniversity className={styles.icon}/>
                    </div>
                    <div className={styles.text}>
                        <div>
                            <CountUp end={num1} redraw={true} duration={5} className="count">
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <div className={styles.in}>
                                            {text1} - <span ref={countUpRef} className="count"/> ta
                                        </div>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                        <div>
                            <CountUp end={num2} redraw={true} duration={5} className="count">
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <div className={styles.in}>
                                            {text2} - <span ref={countUpRef} className="count"/> ta
                                        </div>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                        <div>
                            <CountUp end={num3} redraw={true} duration={5} className="count">
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <div className={styles.in}>
                                            {text3} - <span ref={countUpRef} className="count"/> ta
                                        </div>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                    </div>
                    <Link href={link}>
                        <div className={styles.box2}>
                            {button}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Section3;