import axios from 'axios';

const api = "http://localhost:5000/api/auth"

//Register

export const register = async(username, email, password) => {
return await axios.post(api + "/register", {
    username,
    email,
    password,
})
}

//Login
export const logIn = async(username, password) => {
    return await axios.post(
        api + "/login", {
            username,
            password
        }
    ).then((response)=> {
        if(response.data.accessToken){
            localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
    })
}

//logout
export const logout = () => {
    localStorage.removeItem("user");
}

