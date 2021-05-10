import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "../styles/apply/section-1/section-1.module.scss"

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} className={styles.input}/>
    );
};
export default Example