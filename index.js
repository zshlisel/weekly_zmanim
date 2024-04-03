import {HebrewDateEvent, HDate, Location, Zmanim} from '@hebcal/core';
const nDate = new HDate()
// let now = new Date()
// const currentHour = now.getHours;
// const currentMinute = now.getMinutes();
// const currentTime = `${currentHour}:${currentMinute}:00`
// console.log(`Current time: ${currentHour}:${currentMinute}`);

let week =[]

for (let i = 0; i <= 6; i++) {
    let sunDay = nDate.subtract(nDate.getDay(), 'd').add(i, 'd');
    const zmanim = new Zmanim(Location.lookup('new york') ,sunDay)
    let hebrewDate = new HebrewDateEvent(sunDay);
    let shma = zmanim.sofZmanShmaMGA().toLocaleTimeString('en-us');
    let tfilla = zmanim.sofZmanTfillaMGA().toLocaleTimeString('en-us');
    week.push({ Date: hebrewDate.desc, shma: shma, tfilla: tfilla });
   
}
console.table(week)