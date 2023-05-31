// 'use client';

// import React from 'react';

// const page = () => {
//   const handleDayClick = (day) => {
//     // Perform action when a day is clicked
//     console.log('Clicked day:', day);
//   };

//   const currentDate = new Date();
//   const month = currentDate.toLocaleString('default', { month: 'long' });

//   return (
//     <section className="py-12">
//       <div className="container mx-auto">
//         <div className="flex flex-wrap -mx-4">
//           <div className="w-full">
//             <div className="p-6 bg-white rounded-lg shadow">
//               <h2 className="text-xl font-semibold mb-2">{month} Calendar</h2>
//               <div className="grid grid-cols-7 gap-20">
//                 <div className="text-center text-gray-600">Sun</div>
//                 <div className="text-center text-gray-600">Mon</div>
//                 <div className="text-center text-gray-600">Tue</div>
//                 <div className="text-center text-gray-600">Wed</div>
//                 <div className="text-center text-gray-600">Thu</div>
//                 <div className="text-center text-gray-600">Fri</div>
//                 <div className="text-center text-gray-600">Sat</div>
//                 {/* Generate the calendar days dynamically */}
//                 {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
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

import React from 'react';

const page = () => {
  const handleDayClick = (day) => {
    // Perform action when a day is clicked
    console.log('Clicked day:', day);
  };

  // Get the current month and year
  const currentDate = new Date();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  // Generate an array of dates for the current month
  const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
  const datesArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Get the first day of the month and fill in empty days
  const firstDay = new Date(year, currentDate.getMonth(), 1).getDay();
  const emptyDays = Array.from({ length: firstDay }, () => '');

  // Combine the empty days and dates array
  const calendarDays = [...emptyDays, ...datesArray];

  // Get the abbreviated day names
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full">
            <div className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">{month} {year} Calendar</h2>
              <div className="grid grid-cols-7 gap-20">
                {dayNames.map((day) => (
                  <div key={day} className="text-center text-gray-600 font-semibold">
                    {day}
                  </div>
                ))}
                {calendarDays.map((day) => (
                  <button
                    key={day}
                    onClick={() => handleDayClick(day)}
                    className="text-center p-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-200 focus:outline-none"
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;