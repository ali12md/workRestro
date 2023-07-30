import axios from "axios";

export const getApi = () => axios
    .get(`https://fakestoreapi.com/products`)
    .then((res) => res)