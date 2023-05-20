type StartValueReducerActionType = ChangeStartValueACType;

export const startValueReducer = (state: number, action: StartValueReducerActionType) => {
    switch (action.type) {
        case  "CHANGE-START-VALUE" : {
            return action.payload.n
        }
        default:
            return state;
    }
};

type ChangeStartValueACType = ReturnType<typeof changeStartValueAC>

export const changeStartValueAC = (n: number) => {
    return {
        type: "CHANGE-START-VALUE",
        payload: {n}
    } as const
}