// 'use client';

// import React from 'react';
// import Calendar from 'react-calendar';

// const page = () => {
//   const handleDayClick = (day) => {
//     // Perform action when a day is clicked
//     console.log('Clicked day:', day);
//   };

//   // Get the current month and year
//   const currentDate = new Date();
//   const month = currentDate.toLocaleString('default', { month: 'long' });
//   const year = currentDate.getFullYear();

//   // Generate an array of dates for the current month
//   const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
//   const datesArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

//   // Get the first day of the month and fill in empty days
//   const firstDay = new Date(year, currentDate.getMonth(), 1).getDay();
//   const emptyDays = Array.from({ length: firstDay }, () => '');

//   // Combine the empty days and dates array
//   const calendarDays = [...emptyDays, ...datesArray];

//   // Get the abbreviated day names
//   const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//   return (
//     <section className="py-12">
//       <div className="container">
//         <div className="flex flex-wrap -mx-4">
//           <div className="w-full">
//             <div className="p-6 bg-white rounded-lg shadow">
//               <h2 className="text-xl font-semibold mb-2">{month} {year} Calendar</h2>

//               <button
//             className="text-gray-600 hover:text-gray-900"
//             // onClick={handlePreviousMonth}
//           >
//             &lt; Previous Month
//           </button>
//           <h2 className="text-lg font-semibold">{month}</h2>
//           <button
//             className="text-gray-600 hover:text-gray-900"
//             // onClick={handleNextMonth}
//           >Next Month</button>

//               <div className="grid grid-cols-7 gap-20">
//                 {dayNames.map((day) => (
//                   <div key={day} className="text-center text-gray-600 font-semibold">
//                     {day}
//                   </div>
//                 ))}
//                 {calendarDays.map((day) => (
//                   <button
//                     key={day}
//                     onClick={() => handleDayClick(day)}
//                     className="text-center p-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-200 focus:outline-none"
//                   >
//                     {day}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default page;

'use client';

import {useState} from 'react';
import Calendar from 'react-calendar'; 
// import 'react-calendar/dist/Calendar.css'
import './calendar.css'

function App() {
 const [date, setDate] = useState(new Date())



return (
 <div className="app py-12">
  <h1 className="text-4xl font-bold mb-4">
      <span className="text-purple-300 text-center">
        FIT4LYFE &nbsp;
      </span>
      Calendar
  </h1>
   <div className="calendar-container font-bold">
     <Calendar onChange={setDate} value={date}/>
   </div>
   <div className="text-center pt-6 font-bold">
      Selected date: {date.toDateString()}
   </div>
 </div>
  )

}

export default App;