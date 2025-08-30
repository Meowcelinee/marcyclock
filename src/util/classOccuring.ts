import { DateTime, Interval } from 'luxon';
import { Schedule } from '../schedules/schoolClassSchedules';

export default function classOccuring(schedule: Schedule): boolean {
    return Interval.fromDateTimes(
        schedule.startTime,
        schedule.endTime
    ).contains(DateTime.now().toLocal());
}
