import { DateTime, Interval } from 'luxon';
import { Schedule } from '../../schedules/Schedule';

// prettier-ignore
export default function classTimeRemaining(): string {
    const currentClass: Schedule = Schedule.fromObject({ name: 'TemporaryClassUntilIImplementMoreShit', start: '12:00', end: '13:45' });

    if (!currentClass) return '';

    return `Time left in this class: ${
        Interval.fromDateTimes(
            DateTime.now().toLocal(), // current time (localized)
            DateTime.fromObject({
                hour: currentClass.endTime.hour,
                minute: currentClass.endTime.minute
            }) // end time
        )
        .toDuration(['hours', 'minutes']) // get time between now and end of class
        .toHuman({
            unitDisplay: 'short',
            maximumFractionDigits: 0,
            showZeros: false
        }) // make it actually readable
    }`;
}
