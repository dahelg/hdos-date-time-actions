import { DateTimeActions } from "./types/index.js";
import * as actions from "./date-time-actions.js";

export function initDateTimeActions(): DateTimeActions {
    console.log("[hdos-date-time-actions] Initialize");
    return {
        hideElementsAfterDate: actions.hideElementsAfterDate,
        showElementsAfterDate: actions.showElementsAfterDate,
        toggleElementsAtDate: actions.toggleElementsAtDate,
        addClassAtDate: actions.addClassAtDate,
        removeClassAtDate: actions.removeClassAtDate,
        executeCallbackAtDate: actions.executeCallbackAtDate,
        animateElementsAtDate: actions.animateElementsAtDate,
        fetchDataAtDate: actions.fetchDataAtDate,
        updateContentAtDate: actions.updateContentAtDate,
        scheduleRecurringAction: actions.scheduleRecurringAction,
        cancelScheduledAction: actions.cancelScheduledAction,
    };
}

// Re-export specific actions
export { hideElementsAfterDate } from "./date-time-actions.js";
