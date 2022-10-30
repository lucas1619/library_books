import axios from 'axios';
export class Api {
  private baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    if(localStorage.getItem('token')) {
      this.addAuthHeader(localStorage.getItem('token') || '');
    }
  }

  public async get(url: string): Promise<any> {
    const response = await axios.get(`${this.baseUrl}/${url}`);
    return response.data;
  }

  public async post(url: string, data: any): Promise<any> {
    const response = await axios.post(`${this.baseUrl}/${url}`, data);
    return response.data;
  }

  public addAuthHeader(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem('token', token);
  }

}
