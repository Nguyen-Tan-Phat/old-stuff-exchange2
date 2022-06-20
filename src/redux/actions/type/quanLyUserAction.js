import axios from "axios";

export const quanLyUserAction = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/v1.0/users?pageNumber=1&pageSize=100',
                method: 'GET',
                headers: {
                    'Authorization': `Bearer `+ localStorage.getItem('tokenAdmin') 
                  }
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

export const deleteUserAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/v1.0/users/' + id,
                method: 'DELETE',
                headers: {
                    ['Authorization']: 'Bearer ' + localStorage.getItem('tokenAdmin') ,
                }
            })
            const action = quanLyUserAction();
            dispatch(action);
        } catch (error) {
            console.log(error.data);
        }
    }
}

export const editUserAction = (a) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/v1.0/users',
                method: 'PUT',
                data: a,
                headers: {
                    ['Authorization']: 'Bearer ' + localStorage.getItem('tokenAdmin') ,
                }
            });
            const action = quanLyUserAction();
            dispatch(action);
        } catch (error) {
            console.log(error.data);
        }
    }
}