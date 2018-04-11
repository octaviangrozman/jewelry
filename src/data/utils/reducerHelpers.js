const isPendingReducer = (actions) => {
    const [PENDING, SUCCESS, FAIL] = actions; 
    return (state = false, action) => {
        switch (action.type) {
            case PENDING: return true;
            case SUCCESS:
            case FAIL: return false;
            default: return state;
        }
    }
}

const errorReducer = (ERROR_ACTION, RESET_ACTION = null) => {
    return (state = null, action) => {
        if (Array.isArray(ERROR_ACTION)) {
            if (ERROR_ACTION.some(actionType => action.type === actionType)) return action.payload.response.data.error || action.payload.response.error || action.errorMessage || action.payload.response.data;
            switch (action.type) {
                case RESET_ACTION: return null;
                default: return state;
            }
        } else {

            switch (action.type) {
                case ERROR_ACTION: return action.payload.response.data.error || action.payload.response.error || action.errorMessage || action.payload.response.data;
                case RESET_ACTION: return null;
                default: return state;
            }
        }
    }
}

export {
    isPendingReducer,
    errorReducer
}