import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080/api/v1"
});

const endpoints = {
  async cumulative(state) {
    const resp = await http.get(`/historic/${state}/cumulative`);
    return resp.data.result;
  },
  async deltas(state) {
    const resp = await http.get(`/historic/${state}/deltas`);
    return resp.data.result;
  }
};

export default endpoints;
