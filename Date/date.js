const now = new Date();
console.log(now);


const dateComponents = new Date(2024, 0, 15, 9, 30);

console.log(dateComponents);


const date = new Date();
console.log(date.getFullYear());   // 2024
console.log(date.getMonth());      // 0 (January)
console.log(date.getDate());       // Day of the month
console.log(date.getDay());        // Day of the week (0 = Sunday)
console.log(date.getHours());      // Current hour
console.log(date.getMinutes());    // Current minute
console.log(date.getSeconds());    // Current second
console.log(date.getMilliseconds());


const date1 = new Date();
date.setFullYear(2025);
date.setMonth(11); // December
date.setDate(25);
console.log(date); 

console.log(date.toDateString());  // "Thu Dec 25 2025"
console.log(date.toISOString());   // "2025-12-25T00:00:00.000Z"
console.log(date.toLocaleDateString()); 