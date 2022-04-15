// import React, { useState } from "react";

// import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import ja from "date-fns/locale/ja"; // the locale you want
// registerLocale("ja", ja); // register it with the name you want

// const Home = () => {
//     const [startDate, setStartDate] = useState();
//     const onChangeDate = (date) => {
//         setStartDate(date);
//     };
//     return (
//         <DatePicker
//             locale="ja"
//             dateFormat="yyyy/MM/dd"
//             selected={startDate}
//             onChange={onChangeDate}
//         />
//     );
// };

// export default Home;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
const Home = () => {
    const [startDate, setStartDate] = useState(null);
    const handleChangeRaw = (value) => {
        console.log(typeof value);
        if (typeof value == "string") {
            const replaceValue = value.replace(/ /g, "");
            // 0 Index is Years, 1 Index is Months, 2 Index is Days
            const splitData = replaceValue.split("/");
            var theBigDay = new Date();
            if (splitData && splitData.length > 0 && splitData[0]) {
                theBigDay.setYear(splitData[0]);
                setStartDate(theBigDay);
            }
            if (splitData && splitData.length > 1 && splitData[1]) {
                theBigDay.setMonth(splitData[1] - 1);
                setStartDate(theBigDay);
            }
            if (splitData && splitData.length > 2 && splitData[2]) {
                theBigDay.setDate(splitData[2]);
                setStartDate(theBigDay);
            }
        } else {
            setStartDate(value);
        }
    };
    return (
        <DatePicker
            selected={startDate}
            dateFormat="yyyy/MM/dd"
            onChange={(date, event) => {
                setStartDate(date);
            }}
            onChangeRaw={(event) => handleChangeRaw(event.target.value)}
        />
    );
};

export default Home;
