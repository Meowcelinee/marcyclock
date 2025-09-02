import './style.css';
import { ClassElement } from './display/classElements';
import { DateTime } from 'luxon';
import { getClasses } from './schedules/schoolClasses';
import classTimeRemaining from './display/time/classTimeRemaining';
import displayTime from './display/time/displayTime';

const scheduleType = document.getElementById('scheduleType')!;
const timeLeft = document.getElementById('timeLeft')!;

getClasses().forEach(cls => {
    document
        .getElementById('scheduleContent')!
        .appendChild(ClassElement(cls.localize()));
});

scheduleType.textContent = DateTime.local().weekdayLong;
timeLeft.textContent = classTimeRemaining();
displayTime();

setInterval(() => {
    scheduleType.textContent = DateTime.local().weekdayLong;
    timeLeft.textContent = classTimeRemaining();
    displayTime();
}, 250);
