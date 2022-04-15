import React, { useState } from "react";

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ja from "date-fns/locale/ja"; // the locale you want
registerLocale("ja", ja); // register it with the name you want

const Home = () => {
    const [startDate, setStartDate] = useState();
    const onChangeDate = (date) => {
        setStartDate(date);
    };
    return (
        <DatePicker
            locale="ja"
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            onChange={onChangeDate}
        />
    );
};

export default Home;

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// const Home = () => {
//     const [newvalue, setValue] = useState(null);
//     const handleChangeRaw = (value) => {
//         const replaceValue = value.replace(/ /g, "");
//         // 0 Index is Years, 1 Index is Months, 2 Index is Days
//         const spiltValue = replaceValue.split("/");
//         console.log(spiltValue);
//     };
//     return (
//         <DatePicker
//             dateFormat="yyyy/MM/dd"
//             onChange={(date, event) =>
//                 console.log("event.target.value", event.target.value, date)
//             }
//             onChangeRaw={(event) => handleChangeRaw(event.target.value)}
//         />
//     );
// };

// export default Home;
