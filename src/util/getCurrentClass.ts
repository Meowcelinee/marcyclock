import { Schedule } from '../schedules/Schedule';
import classOccuring from './classOccuring';

export default function getCurrentClass(
    classList: Schedule[]
): Schedule | undefined {
    return classList.filter(cls => classOccuring(cls))[0];
}
