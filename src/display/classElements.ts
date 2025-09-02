import { DateTime } from 'luxon';
import { Schedule } from '../schedules/Schedule';

const classClassNames = {
    wrapperDiv: {
        past: 'bg-fg-night rounded-xl text-black line-through mb-1',
        current: 'bg-purple rounded-xl text-fg-night mb-1',
        future: 'bg-blacker rounded-xl mb-1',
    },

    nameOfClass: {
        past: 'font-medium md:text-left text-center',
        current: 'font-semibold md:text-left text-center',
        future: 'font-medium md:text-left text-center',
    },

    classTimes: {
        past: 'font-jetbrains md:text-right text-center',
        current: 'font-jetbrains font-bold md:text-right text-center',
        future: 'font-jetbrains font-medium md:text-right text-center',
    },
};

export function ClassElement(
    classParam: Schedule,
    time?: 'past' | 'current' | 'future'
): HTMLDivElement {
    const wrapper = document.createElement('div');
    wrapper.className = classClassNames.wrapperDiv[time ?? 'future'];

    const textContainer = wrapper.appendChild(document.createElement('div'));
    textContainer.className = `flex md:flex-row flex-col justify-between text-2xl py-5 px-4`;

    const nameOfClass = textContainer.appendChild(document.createElement('p'));
    nameOfClass.className = classClassNames.nameOfClass[time ?? 'future'];
    nameOfClass.textContent = classParam.className;

    const timeOfClass = textContainer.appendChild(document.createElement('p'));
    timeOfClass.className = classClassNames.classTimes[time ?? 'future'];

    const startSpan = timeOfClass.appendChild(document.createElement('span'));
    startSpan.id = 'startTime';
    startSpan.textContent = classParam.startTime.toLocaleString(
        DateTime.TIME_SIMPLE
    );

    timeOfClass.appendChild(document.createElement('span')).textContent =
        ' --> ';

    const endSpan = timeOfClass.appendChild(document.createElement('span'));
    endSpan.id = 'endTime';
    endSpan.textContent = classParam.endTime.toLocaleString(
        DateTime.TIME_SIMPLE
    );

    return wrapper;
}

// TODO: function for indicating there are no classes
