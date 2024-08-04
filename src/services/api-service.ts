import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface ApiResponse<T> {
  data: T;
  status: number;
}

class ApiService<T> {
  private api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Método para obtener todos los elementos
  async getAll(endpoint: string): Promise<ApiResponse<T[]>> {
    try {
      const response: AxiosResponse<T[]> = await this.api.get(endpoint);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  // Método para agregar un nuevo elemento
  async add(endpoint: string, data: T): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.api.post(endpoint, data);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      console.error('Error adding data:', error);
      throw error;
    }
  }

  // Método para actualizar un elemento existente
  async update(endpoint: string, id: number | string, data: T): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.api.put(`${endpoint}/${id}`, data);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }

  // Método para eliminar un elemento
  async delete(endpoint: string, id: number | string): Promise<ApiResponse<void>> {
    try {
      const response: AxiosResponse<void> = await this.api.delete(`${endpoint}/${id}`);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error;
    }
  }
}

export default ApiService;
