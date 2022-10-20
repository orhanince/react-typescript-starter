import axios from 'axios';
import BASE_URL from './url'

/**
 * Define return data from the api
 * @param {object} response
 */
const myInterceptorSuccess = function (response: any) {
    if (response.status == 200 && response.data) {
        return response
    }else {
        throw response
    }
};

const myInterceptorError = function (err: any) {
    console.log('interceptorError => ', err)
    if (!err.response) {
        const errorMessage = { message: 'Network Error!' };
        throw errorMessage;
    }

    if (err.response.status === 401) {
        const errorMessage = { message: 'Authorization Error!' };
        throw errorMessage;
    }
    return false;
};

const createAxios = (endpoint: string) =>
    axios.create({
        baseURL: `${BASE_URL}/${endpoint}`,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        validateStatus(status) {
            return status === 200;
        },
    });

// route => base_url/users
let auth = createAxios('auth');
let business = createAxios('business');
let menu = createAxios('menu');
let menuCategory = createAxios('menu-category');
let menuItem = createAxios('menu-item');
const axiosRequests = [auth, business, menu, menuCategory, menuItem];
for (const element of axiosRequests) {
    element.interceptors.response.use(myInterceptorSuccess, myInterceptorError);
}

const Request = {
    auth: auth,
    business: business,
    menu: menu,
    menuCategory: menuCategory,
    menuItem: menuItem
};

export default Request;