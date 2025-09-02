import { DateTime } from 'luxon';
import { Schedule } from './Schedule';

const classSortFn = (classA: Schedule, classB: Schedule) => {
    const { hour: aHour, minute: aMin } = classA.startTime;
    const { hour: bHour, minute: bMin } = classB.startTime;

    return aHour * 60 + aMin - (bHour * 60 + bMin);
};

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

const oddSched = [INTREL, CCSUCCESS].sort(classSortFn);
const evenSched = [PRECALC, COMP, JAVA].sort(classSortFn);

export function getClasses(): Schedule[] {
    const weekday = DateTime.local().weekday;
    if (weekday > 4) return [];

    return [evenSched, oddSched][weekday % 2];
}
