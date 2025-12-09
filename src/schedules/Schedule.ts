import { DateTime } from 'luxon';

export type ClassType = {
    name: string;
    times: {
        start: DateTime;
        end: DateTime;
    };
};

export class Schedule {
    private name;
    private times;

    constructor(args: ClassType) {
        this.name = args.name;
        this.times = args.times;
    }

    public get className(): string {
        return this.name;
    }

    public get startTime(): DateTime {
        return this.times.start;
    }

    public get endTime(): DateTime {
        return this.times.end;
    }

    private set startTime({ hour, minute }: { hour: number; minute: number }) {
        const newStartTime = DateTime.fromObject({
            hour: hour,
            minute: minute,
        });

        this.times.start = newStartTime;
    }

    private set endTime({ hour, minute }: { hour: number; minute: number }) {
        const newEndTime = DateTime.fromObject({
            hour: hour,
            minute: minute,
        });

        this.times.end = newEndTime;
    }

    public localize(): Schedule {
        const hourOffset = DateTime.now().offset / 60;

        const newStartTime = DateTime.fromObject({
            hour: this.startTime.hour + hourOffset,
            minute: this.startTime.minute,
        });

        const newEndTime = DateTime.fromObject({
            hour: this.endTime.hour + hourOffset,
            minute: this.endTime.minute,
        });

        this.startTime = {
            hour: newStartTime.hour,
            minute: newStartTime.minute,
        };

        this.endTime = {
            hour: newEndTime.hour,
            minute: newEndTime.minute,
        };

        return this;
    }

    /**
     * Creates a new Schedule object from the passed parameter object.
     *
     * @param name - A string for the name of the school class.
     * @param start - A string for the starting time for the school class - formatted as `hh:mm`. 12hr and 24hr supported.
     * @param end - A string for the ending time for the school class - formatted as `hh:mm`. 12hr and 24hr supported.
     * @returns new Schedule
     */
    public static fromObject({
        name,
        start,
        end,
    }: {
        name: string;
        start: string;
        end: string;
    }): Schedule {
        const [startTime, startTimeOfDay]: string[] = start.split(' ');
        const [endTime, endTimeOfDay]: string[] = end.split(' ');

        let [startHour, startMin]: number[] = startTime
            .split(':')
            .map(e => parseInt(e));

        let [endHour, endMin]: number[] = endTime
            .split(':')
            .map(e => parseInt(e));

        if (startTimeOfDay?.toLowerCase() === 'pm') startHour += 12;
        if (endTimeOfDay?.toLowerCase() === 'pm') endHour += 12;

        const classStartTime = DateTime.fromObject(
            {
                hour: startHour,
                minute: startMin,
            },
            { zone: 'utc' }
        );

        const classEndTime = DateTime.fromObject(
            {
                hour: endHour,
                minute: endMin,
            },
            { zone: 'utc' }
        );

        // truncate name if more than three words
        if (name.split(' ').length > 3) {
            const [first, last] = [
                name.split(' ')[0],
                name.split(' ')[name.split(' ').length - 1],
            ];

            name = `${first} (...) ${last}`;
        }

        return new Schedule({
            name: name,
            times: {
                start: classStartTime,
                end: classEndTime,
            },
        });
    }
}
