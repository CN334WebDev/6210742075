import http from "../http";

class PetsService {
  getAll() {
    return http.get("/api/portfolio");
  }

  get(id) {
    return http.get(`/api/portfolio/${id}`);
  }

  create(data) {
    console.log(data)
    return http.post("/api/portfolio", data);
  }

  update(id, data) {
    return http.put(`/api/portfolio/${id}`, data);
  }

  delete(id) {
    return http.delete(`/api/portfolio/${id}`);
  }
}

export default new PetsService();
