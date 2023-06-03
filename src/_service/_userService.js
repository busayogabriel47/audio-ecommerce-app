import {authHeader} from './_authHeader';



export const register = async(user) => {
    const registerRes = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };
    return await fetch('http://localhost:5000/api/auth/register', registerRes)
    .then(handleResponse)
}

export const login = async(username, password) => {
    const logResquest = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    };

    return await fetch('http://localhost:5000/api/auth/login', logResquest)
    .then(handleResponse)
    .then(user => {
    /*store user details and jwt token in local storage to keep
    user logged in between page refreshes*/
    localStorage.setItem('user', JSON.stringify(user)) 

    return user;
    })
}

export const logout = () => {
    //remove user from local storage to log user out
    localStorage.removeItem('user')
}


const handleResponse = (response) =>{
    return response.text().then(text=> {
        const data = text && JSON.parse(text);
        if(!response.ok){
            if(response.status === 401) {
                //auto logout if 401 reponse returned from api
                logout();
                window.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    })
}
