export interface DateTimeActions {
    hideElementsAfterDate: () => void;
    showElementsAfterDate: () => void;
    toggleElementsAtDate: (date: Date) => void;
    addClassAtDate: (className: string, date: Date) => void;
    removeClassAtDate: (className: string, date: Date) => void;
    executeCallbackAtDate: (callback: () => void, date: Date) => void;
    animateElementsAtDate: (animationName: string, date: Date) => void;
    fetchDataAtDate: (url: string, date: Date) => Promise<any>;
    updateContentAtDate: (selector: string, content: string, date: Date) => void;
    scheduleRecurringAction: (action: () => void, schedule: string) => void;
    cancelScheduledAction: (actionId: string) => void;
}
