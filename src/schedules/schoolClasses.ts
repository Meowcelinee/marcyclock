import { DateTime } from 'luxon';
import { Schedule } from './schoolClassSchedules';

export const INTREL = Schedule.fromObject({
    name: 'International Relations',
    start: '20:00',
    end: '21:15',
});

export const CCSUCCESS = Schedule.fromObject({
    name: 'College and Career Success',
    start: '21:15',
    end: '22:45',
});

export const PRECALC = Schedule.fromObject({
    name: 'Precalculus',
    start: '12:00',
    end: '13:45',
});

export const COMP = Schedule.fromObject({
    name: 'Composition',
    start: '14:15',
    end: '15:45',
});

export const JAVA = Schedule.fromObject({
    name: 'Java I',
    start: '18:00',
    end: '19:45',
});

const oddSched = [INTREL, CCSUCCESS];
const evenSched = [PRECALC, COMP, JAVA];

function getClasses(): Schedule[] | null {
    const weekday = DateTime.local().weekday;
    if (weekday > 4) return null;

    return weekday % 2 !== 0 ? evenSched : oddSched;
}

export const classes = getClasses();
