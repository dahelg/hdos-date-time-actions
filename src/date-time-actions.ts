import { DateTimeActions } from "./types/index";

export const hideElementsAfterDate: DateTimeActions['hideElementsAfterDate'] = () => {
    const elements = document.querySelectorAll('[data-hide-after]');
    elements.forEach((element) => {
        const hideAfterDate = new Date(element.getAttribute('data-hide-after') || '');
        if (new Date() > hideAfterDate) {
            element.classList.add('hidden');
        }
    });
};

export const showElementsAfterDate: DateTimeActions['showElementsAfterDate'] = () => {
    const elements = document.querySelectorAll('[data-show-after]');
    elements.forEach((element) => {
        const showAfterDate = new Date(element.getAttribute('data-show-after') || '');
        if (new Date() > showAfterDate) {
            element.classList.remove('hidden');
        }
    });
};

export const toggleElementsAtDate: DateTimeActions['toggleElementsAtDate'] = (date: Date) => {
    const elements = document.querySelectorAll('[data-toggle-at]');
    elements.forEach((element) => {
        const toggleAtDate = new Date(element.getAttribute('data-toggle-at') || '');
        if (date >= toggleAtDate) {
            element.classList.toggle('hidden');
        }
    });
};

export const addClassAtDate: DateTimeActions['addClassAtDate'] = (className: string, date: Date) => {
    const elements = document.querySelectorAll('[data-add-class-at]');
    elements.forEach((element) => {
        const addClassAtDate = new Date(element.getAttribute('data-add-class-at') || '');
        if (date >= addClassAtDate) {
            element.classList.add(className);
        }
    });
};

export const removeClassAtDate: DateTimeActions['removeClassAtDate'] = (className: string, date: Date) => {
    const elements = document.querySelectorAll('[data-remove-class-at]');
    elements.forEach((element) => {
        const removeClassAtDate = new Date(element.getAttribute('data-remove-class-at') || '');
        if (date >= removeClassAtDate) {
            element.classList.remove(className);
        }
    });
};

export const executeCallbackAtDate: DateTimeActions['executeCallbackAtDate'] = (callback: () => void, date: Date) => {
    const now = new Date();
    if (now >= date) {
        callback();
    } else {
        const delay = date.getTime() - now.getTime();
        setTimeout(callback, delay);
    }
};

export const animateElementsAtDate: DateTimeActions['animateElementsAtDate'] = (animationName: string, date: Date) => {
    const elements = document.querySelectorAll('[data-animate-at]');
    elements.forEach((element) => {
        const animateAtDate = new Date(element.getAttribute('data-animate-at') || '');
        if (date >= animateAtDate) {
            (element as HTMLElement).style.animation = animationName;
        }
    });
};

export const fetchDataAtDate: DateTimeActions['fetchDataAtDate'] = async (url: string, date: Date) => {
    const now = new Date();
    if (now >= date) {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    } else {
        const delay = date.getTime() - now.getTime();
        return new Promise((resolve) => {
            setTimeout(async () => {
                try {
                    const response = await fetch(url);
                    resolve(await response.json());
                } catch (error) {
                    console.error('Error fetching data:', error);
                    resolve(null);
                }
            }, delay);
        });
    }
};

export const updateContentAtDate: DateTimeActions['updateContentAtDate'] = (selector: string, content: string, date: Date) => {
    const now = new Date();
    if (now >= date) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            element.textContent = content;
        });
    } else {
        const delay = date.getTime() - now.getTime();
        setTimeout(() => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((element) => {
                element.textContent = content;
            });
        }, delay);
    }
};

export const scheduleRecurringAction: DateTimeActions['scheduleRecurringAction'] = (action: () => void, schedule: string) => {
    // This is a simple implementation. For more complex schedules, consider using a library like 'node-schedule'
    const [hours, minutes] = schedule.split(':').map(Number);

    const scheduleAction = () => {
        const now = new Date();
        const nextRun = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

        if (nextRun <= now) {
            nextRun.setDate(nextRun.getDate() + 1);
        }

        const delay = nextRun.getTime() - now.getTime();
        setTimeout(() => {
            action();
            scheduleAction(); // Schedule the next run
        }, delay);
    };

    scheduleAction();
};

export const cancelScheduledAction: DateTimeActions['cancelScheduledAction'] = (actionId: string) => {
    // This implementation assumes that actionId is a timeout or interval ID
    clearTimeout(Number(actionId));
    clearInterval(Number(actionId));
};
