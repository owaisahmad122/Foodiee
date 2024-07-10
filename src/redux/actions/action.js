import axios from 'axios'
export const login = (user) => ({
    type: 'LOGIN',
    payload: user,
});
export const signup = (user) => ({
    type: 'SIGNUP',
    payload: user,
});
export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}
export const Del = (item) => {
    return {
        type: "Del",
        payload: item
    }
}
export const search = (item) => ({
    type: 'search',
    payload: item,
});

// remove iteams
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

// remove individual iteam

export const REMOVE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload: iteam
    }
}

export const signupUser = (userData) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3005/signup', userData);
            console.log(response);
            dispatch(signup(response.data));
        } catch (error) {
            // Handle signup error
        }
    };
};
const API_BASE_URL = 'http://localhost:3005'; // Replace with your server URL
export const loginUser = (credentials) => {
    return async (dispatch) => {
        try {
            console.log(credentials);
            const response = await axios.get(`${API_BASE_URL}/signup`);
            const user = response.data.find((element) => element.email === credentials.email && element.password === credentials.password);
            console.log(user);
            if (user) {
                dispatch(login(user));
                return true; // Login successful
            } else {
                return false; // Login failed
            }
        } catch (error) {
            // Handle login error
            return false;
        }
    };
};