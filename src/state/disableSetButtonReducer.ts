type DisableSetButtonReducerActionType = toggleButtonSetACType;

export const disableSetButtonReducer = (state: boolean, action: DisableSetButtonReducerActionType) => {
    switch (action.type) {
        case  "TOGGLE-BUTTON-SET" : {
            return action.payload.onOff
        }
        default:
            return state;
    }
};

type toggleButtonSetACType = ReturnType<typeof toggleButtonSetAC>

export const toggleButtonSetAC = (onOff: boolean) => {
    return {
        type: "TOGGLE-BUTTON-SET",
        payload: {onOff}
    } as const
}