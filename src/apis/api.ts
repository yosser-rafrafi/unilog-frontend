import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000/api",
    timeout: 10000,
});

api.interceptors.request.use(
    (config) => {
        const userToken = localStorage.getItem("user");

        if (userToken) {
            config.headers.Authorization = `Bearer ${userToken}`;
            // console.log(config.headers.Authorization)
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const users = {
    signup: (userData: any) => api.post("/users/register", userData),
    login: async (credentials: any) => {
        const { data } = await api.post("/users/login", credentials);
        localStorage.setItem("user", data.token)
    },
    profile: () => api.get("/users/profile"),
};

export { api, users };
