import http from "./common/http-common";

const login = data => {
    return http.post("/login", data);
};

const register = data => {
    return http.post("/login", data);
};

const forgot = data => {
    return http.post("/forgot", data)
}

const reset = data => {
    return http.post("/reset", data)
}

const user = (config =null) => {
    return http.get("/user/show", config);
};


export default {
    login,
    register,
    forgot,
    reset,
    user
}