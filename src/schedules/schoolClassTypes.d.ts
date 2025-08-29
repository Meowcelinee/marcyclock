import { DateTime } from 'luxon';

export type ClassType = {
    name: string;
    times: {
        start: DateTime;
        end: DateTime;
    };
};
