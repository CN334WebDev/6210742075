import axios from "axios";

export default axios.create({
  baseURL: "https://pure-scrubland-43049.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});
