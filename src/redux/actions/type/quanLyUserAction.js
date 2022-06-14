import axios from "axios";

export const quanLyUserAction = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/users/list?pageNumber=1&pageSize=40',
                method: 'GET',
            })
            const action = {
                type: 'LAY_DANH_SACH_USER',
                arrUser: result.data.data,
            }
            dispatch(action)
        } catch (error) {
            console.log(error.data);
        }
    }
}

export const deleteUserAction = (name) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/users/' + name,
                method: 'DELETE',
            })
            const action = quanLyUserAction();
            dispatch(action);
        } catch (error) {
            console.log(error.data);
        }
    }
}