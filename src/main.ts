import './style.css';
import { classes } from './schedules/schoolClasses';
import { ClassElement } from './display/classElements';
import { DateTime } from 'luxon';

console.log(
    'hi this site is currently completely static. the classes are not dynamically generated yet'
);

document.getElementById('scheduleType')!.textContent =
    DateTime.local().weekdayLong;

classes?.forEach(cls => {
    document.getElementById('scheduleContent')!.appendChild(ClassElement(cls));
});
