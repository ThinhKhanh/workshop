/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_URL = "http://localhost:8000/api";
const dataProvider = {
  getList: async (resources: any) => {
    const response = await axios.get(`${API_URL}/${resources}`);
    if (response.status !== 200) {
      throw new Error(`Lỗi khi lấy dữ liệu từ${API_URL}/${resources}`);
    }
    return {
      data: response.data,
    };
  },
  getOne: async (resources: any, id: any) => {
    const response = await axios.get(`${API_URL}/${resources}/${id}`);
    if (response.status !== 200) {
      throw new Error(`Lỗi khi lấy dữ liệu từ ${API_URL}/${resources}/${id}`);
    }
    return {
      data: response.data,
    };
  },
  create: async (resources: any, data: any) => {
    const response = await axios.post(`${API_URL}/${resources}`, data);
    if (response.status !== 201) {
      throw new Error(`Lỗi khi tạo dữ liệu tại ${API_URL}/${resources}`);
    }
    return {
      data: response.data,
    };
  },

  update: async (resources: any, id: any, data: any) => {
    const response = await axios.put(`${API_URL}/${resources}/${id}`, data);
    if (response.status !== 200) {
      throw new Error(
        `Lỗi khi cập nhật dữ liệu tại ${API_URL}/${resources}/${id}`
      );
    }
    return {
      data: response.data,
    };
  },

  delete: async (resources: any, id: any) => {
    const response = await axios.delete(`${API_URL}/${resources}/${id}`);
    if (response.status !== 200) {
      throw new Error(`Lỗi khi xóa dữ liệu tại ${API_URL}/${resources}/${id}`);
    }
    return {
      data: { id },
    };
  },

  register: async (data: any) => {
    const response = await axios.post(`${API_URL}/register`, data);
    if (response.status !== 201) {
      throw new Error(`Lỗi khi đăng ký tại ${API_URL}/register`);
    }
    return {
      data: response.data,
    };
  },

  login: async (data: any) => {
    const response = await axios.post(`${API_URL}/login`, data);
    if (response.status !== 200) {
      throw new Error(`Lỗi khi đăng nhập tại ${API_URL}/login`);
    }
    return {
      data: response.data,
    };
  },
};
export const {
  getList,
  getOne,
  create,
  update,
  delete: deleteOne,
  register,
  login,
} = dataProvider;
