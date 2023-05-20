type DisableResetButtonReducerActionType = toggleButtonResetACType;

export const disableResetButtonReducer = (state: boolean, action: DisableResetButtonReducerActionType) => {
    switch (action.type) {
        case  "TOGGLE-BUTTON-RESET" : {
            return  action.payload.onOff
        }
        default:
            return state;
    }
};

type toggleButtonResetACType = ReturnType<typeof toggleButtonResetAC>

export const toggleButtonResetAC = (onOff: boolean) => {
    return {
        type: "TOGGLE-BUTTON-RESET",
        payload: {onOff}
    } as const
}


