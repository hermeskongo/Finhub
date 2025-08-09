import axios from "axios";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})

// Vérification de l'état d'authentification de l'utilisateur avant d'effectuer chaque requête
axios.interceptors.request.use(function (config) {
    const accessToken = localStorage.getItem("accessToken")
    if(accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if(error.response) {
        if(error.response.status === 401) {
            window.location.href = '/login'
        } else if(error.response.status === 500) {
            console.error("Erreur interne du serveur. Veuillez réésayer plus-tard")
        }
    } else if(error.code === 'ECONNABORTED') {
        console.error("TimeOut")
    }
    return Promise.reject(error);
});
