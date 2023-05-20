type DisplayValueReducerActionType = SetStartValueOnDisplayACType;

export const displayValueReducer = (state: number | string, action: DisplayValueReducerActionType) => {
    switch (action.type) {
        case  "SET-START-VALUE-ON-DISPLAY" : {
            return action.payload.value
        }
        default:
            return state;
    }
};

type SetStartValueOnDisplayACType = ReturnType<typeof setStartValueOnDisplayAC>

export const setStartValueOnDisplayAC = (value: number | string) => {
    return {
        type: "SET-START-VALUE-ON-DISPLAY",
        payload: {value}
    } as const
}