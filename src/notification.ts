import { DateTime } from 'luxon';
import { Schedule } from './schedules/Schedule';

export async function getNotifPermission() {
    if (!('Notification' in window)) return false;

    if (Notification.permission === 'granted') return true;

    return await Notification.requestPermission();
}

export async function sendNotification(cls: Schedule): Promise<boolean> {
    if (!('Notification' in window) || Notification.permission !== 'granted')
        return false;

    if (Notification.permission === 'granted') {
        const notif = new Notification(`Class is over!`, {
            body: `${cls.className} ended at ${cls.endTime.toLocaleString(
                DateTime.TIME_SIMPLE
            )}`,
        });

        notif.onclick = ev => console.log(ev);

        return true;
    }

    return Notification.requestPermission().then((perm): boolean => {
        if (perm !== 'granted') return false;

        const notif = new Notification(`Class is over!`, {
            body: `${cls.className} ended at ${cls.endTime.toLocaleString(
                DateTime.TIME_SIMPLE
            )}`,
        });

        notif.onclick = ev => console.log(ev);

        return true;
    });
}
