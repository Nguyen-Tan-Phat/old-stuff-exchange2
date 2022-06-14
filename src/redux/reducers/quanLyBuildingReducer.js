const stateDefault = {
    arrBuilding: []
}
export const quanLyBuildingReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LAY_DANH_SACH_BUILDING': {
            state.arrBuilding = action.arrBuilding;
            return { ...state }
        }
        default: return state;
    }

}