type DisableIncButtonReducerActionType = incrementValueOnDisplayACType;

export const disableIncButtonReducer = (state: boolean, action: DisableIncButtonReducerActionType) => {
    switch (action.type) {
        case  "TOGGLE-BUTTON-INC" : {
            return action.payload.onOff
        }
        default:
            return state;
    }
};

type incrementValueOnDisplayACType = ReturnType<typeof toggleButtonIncAC>

export const toggleButtonIncAC = (onOff: boolean) => {
    return {
        type: "TOGGLE-BUTTON-INC",
        payload: {onOff}
    } as const
}