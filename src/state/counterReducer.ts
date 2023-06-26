type CounterReducerType = IncrementValueOnDisplayACType | ToggleButtonResetACType | ToggleButtonSetACType | SetStartValueOnDisplayACType | ChangeMaxValueACType | ChangeStartValueACType

export type stateType = {
    maxValue: number
    startValue: number
    displayValue: number | string
    disableIncButton: boolean
    disableResetButton: boolean
    disableSetButton: boolean
}

export const counterReducer = (state: stateType, action: CounterReducerType) => {
    switch (action.type) {
        case "TOGGLE-BUTTON-INC": {
            return { ...state, disableIncButton: action.payload.onOff }
        }
        case "TOGGLE-BUTTON-RESET": {
            return { ...state, disableResetButton: action.payload.onOff }
        }
        case "TOGGLE-BUTTON-SET": {
            return { ...state, disableSetButton: action.payload.onOff }
        }
        case "SET-START-VALUE-ON-DISPLAY": {
            return { ...state, displayValue: action.payload.value }
        }
        case "CHANGE-MAX-VALUE": {
            return { ...state, maxValue: action.payload.n }
        }
        case "CHANGE-START-VALUE": {
            return { ...state, startValue: action.payload.n }
        }
        default:
            return state;
    }
};

type IncrementValueOnDisplayACType = ReturnType<typeof toggleButtonIncAC>

export const toggleButtonIncAC = (onOff: boolean) => {
    return {
        type: "TOGGLE-BUTTON-INC",
        payload: { onOff }
    } as const
}

type ToggleButtonResetACType = ReturnType<typeof toggleButtonResetAC>

export const toggleButtonResetAC = (onOff: boolean) => {
    return {
        type: "TOGGLE-BUTTON-RESET",
        payload: { onOff }
    } as const
}

type ToggleButtonSetACType = ReturnType<typeof toggleButtonSetAC>

export const toggleButtonSetAC = (onOff: boolean) => {
    return {
        type: "TOGGLE-BUTTON-SET",
        payload: { onOff }
    } as const
}

type SetStartValueOnDisplayACType = ReturnType<typeof setStartValueOnDisplayAC>

export const setStartValueOnDisplayAC = (value: number | string) => {
    return {
        type: "SET-START-VALUE-ON-DISPLAY",
        payload: { value }
    } as const
}

type ChangeMaxValueACType = ReturnType<typeof changeMaxValueAC>

export const changeMaxValueAC = (n: number) => {
    return {
        type: "CHANGE-MAX-VALUE",
        payload: { n }
    } as const
}

type ChangeStartValueACType = ReturnType<typeof changeStartValueAC>

export const changeStartValueAC = (n: number) => {
    return {
        type: "CHANGE-START-VALUE",
        payload: { n }
    } as const
}