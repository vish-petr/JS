let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let month = [];

let day = 'вторник';
let dayIndex = week.indexOf(day);

for (let i = 1; i < 32; i++) {
  month.push(i);
} 

for (let i = 0; i < week.length; i++) {
  if (week[i] === day) {
    dayIndex = i;
  }
}

for (let date of month) {
  let numberMonth = (dayIndex + date - 1) % 7;
  console.log(`${date} января, ${week[numberMonth]}`)
}