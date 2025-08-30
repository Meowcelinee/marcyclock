import './style.css';
import { classes } from './schedules/schoolClasses';
import { ClassElement } from './display/classElements';
import { DateTime } from 'luxon';
import classTimeRemaining from './display/time/classTimeRemaining';
import displayTime from './display/time/displayTime';

const scheduleType = document.getElementById('scheduleType')!;
const timeLeft = document.getElementById('timeLeft')!;

classes?.forEach(cls => {
    document.getElementById('scheduleContent')!.appendChild(ClassElement(cls));
});

scheduleType.textContent = DateTime.local().weekdayLong;
timeLeft.textContent = classTimeRemaining();
displayTime();

setInterval(() => {
    scheduleType.textContent = DateTime.local().weekdayLong;
    timeLeft.textContent = classTimeRemaining();
    displayTime();
}, 250);
