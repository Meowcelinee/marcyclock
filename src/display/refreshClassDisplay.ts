import { Schedule } from '../schedules/Schedule';
import { getClasses } from '../schedules/schoolClasses';
import classOccuring from '../util/classOccuring';

const classNames = {
    past: 'bg-fg-night rounded-xl text-black line-through mb-1',
    current: 'bg-purple rounded-xl text-fg-night mb-1',
    future: 'bg-blacker rounded-xl mb-1',
};

export default function refreshClassDisplay(): void {
    const elemList = document.querySelectorAll('#scheduleContent > div');
    if (elemList.length === 0) return;

    Array.from(elemList).forEach(elem => {
        const [cls]: Schedule[] = getClasses().filter(
            e => e.className === elem.children[0].children[0].textContent
        );

        elem.className = classOccuring(cls)
            ? classNames.current
            : classNames.future;
    });
}
