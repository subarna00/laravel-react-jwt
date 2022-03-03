import axiosClient from "../axios/axios";
const authReducer = (state, action) => {
    switch (action) {
        case "CHECK_LOGIN":
            alert("asd");
            return axiosClient
                .post("/login", action.payload)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
            break;

        default:
            // throw new Error("no matching action type");
            break;
    }

    return state;
};

export default authReducer;
