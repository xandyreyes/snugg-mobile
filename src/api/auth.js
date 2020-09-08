import backendAPI from './config';

export const signUpAPI = async (body) => {
    let response = null;
    try {
        response = await backendAPI.post('/auth/signup', body);
    } catch (e) {
        return Promise.reject(e);
    }
    return response.data;
}