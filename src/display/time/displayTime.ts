import { DateTime } from 'luxon';

const timeDisplay = document.getElementById('timeDisplay')!;
const dateDisplay = document.getElementById('dateDisplay')!;

// prettier-ignore
export default function displayTime(): void {
    timeDisplay.textContent = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE);

    dateDisplay.textContent = DateTime.now().toLocaleString({
        weekday: 'short',
        month: 'short',
        day: '2-digit',
    });
}
