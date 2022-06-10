const reducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.payload
            ]
        case 'delete':
            return state.filter(todo => todo.id !== action.payload); // 123123123
        case 'toggle':
            return state.map(todo =>
                (todo.id === action.payload)
                    ? { ...todo, done: !todo.done }
                    : todo
            );

        case 'toggle-old':
            return state.map(todo => {

                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }

            })

        default:
            return state;
    }

    return state

}

export default reducer