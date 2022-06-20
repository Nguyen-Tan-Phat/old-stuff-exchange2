import axios from "axios";

export const loginAction = (userLogin) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/v1.0/authorizes',
                method: 'POST',
                data: userLogin,
                


            })
            console.log(result.data);
            localStorage.setItem('tokenAdmin',result.data.data.token);
        } catch (error) {
            console.log(error.data);
        }
    }
}