import { DateTime, Interval } from 'luxon';
import { getClasses } from '../../schedules/schoolClasses';
import getCurrentClass from '../../util/getCurrentClass';

// prettier-ignore
export default function classTimeRemaining(): string {
    const classes = getClasses();
    const currentClass = getCurrentClass(classes);

    if (!currentClass) return 'No class occuring';

    return `Time left in this class: ${
        Interval.fromDateTimes(
            DateTime.now().toLocal(), // current time (localized)
            DateTime.fromObject({
                hour: getCurrentClass(classes)!.endTime.hour,
                minute: getCurrentClass(classes)!.endTime.minute
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
