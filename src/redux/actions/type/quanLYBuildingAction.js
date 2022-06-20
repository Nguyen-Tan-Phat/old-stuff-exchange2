import { async } from "@firebase/util";
import axios from "axios";

export const layDanhSachBudingAction = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/v1.0/buildings?page=1&pageSize=100',
                method: 'GET',
            })
            const action = {
                type: 'LAY_DANH_SACH_BUILDING',
                arrBuilding: result.data.data,
            }
            dispatch(action)
        } catch (error) {
            console.log(error.data);
        }
    }
}

export const deleteBuildingAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/v1.0/buildings/' + id,
                method: 'DELETE',
                // headers: `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwiZW1haWwiOiJBRE1JTkBnbWFpbC5jb20iLCJzdWIiOiJBRE1JTkBnbWFpbC5jb20iLCJqdGkiOiJhYTk5YzQxZC01YTdmLTRmYTgtODNkYS0xZDg4MDcxYjZkMzIiLCJVc2VyTmFtZSI6ImFkbWluIiwiSWQiOiIwYjY0YWFhMS0wMDE5LTRiNDgtZTQ3OC0wOGRhNTExZTM2YmIiLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE2NTU2NTc3ODQsImV4cCI6MTY1NTY2MTM4NCwiaWF0IjoxNjU1NjU3Nzg0fQ.3-LHSOzpFK_V8wEyMJEHNiUpQxBNh8tb3kSfrEK2p0s`
                headers: {
                    'Authorization': `Bearer `+ localStorage.getItem('tokenAdmin') 
                  }
            })
            const action = layDanhSachBudingAction();
            dispatch(action);

        } catch (error) {
            console.log(error.data);
        }
    }
}

export const editBuildingAction = (a) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/v1.0/buildings',
                method: 'PUT',
                data: a,
                headers: {
                    ['Authorization']: 'Bearer ' + localStorage.getItem('tokenAdmin') ,
                }
            });
            const action = layDanhSachBudingAction();
            dispatch(action);
        } catch (error) {

        }
    }
}