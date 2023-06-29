const initState = {
    users: [
        {
            id: 1,
            name: "Thanh"
        },
        {
            id: 2,
            name: "Nam"
        }
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;