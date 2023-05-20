type MaxValueReducerType = ChangeMaxValueACType

export const maxValueReducer = (state: number, action: MaxValueReducerType): number => {
    switch (action.type) {
        case "CHANGE-MAX-VALUE": {
            return action.payload.n
        }
        default : {
            return state
        }
    }
};

type ChangeMaxValueACType = ReturnType<typeof changeMaxValueAC>

export const changeMaxValueAC = (n: number) => {
    return {
        type: "CHANGE-MAX-VALUE",
        payload: {n}
    } as const
}