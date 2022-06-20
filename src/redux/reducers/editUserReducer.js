
const stateDefault = { id: '', name: '', email: '', image: '', buildingId: '', status: '' ,roleId: '' ,phone: '',gender:'' };


export const editUserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'XEM_CHI_TIET_USER': {
            state = action.sanPhamClick;
            return { ...state }
        }
        default: return state;
    }
}