import { User } from "~/services/library_api/models/User";
import { login } from "~/services/library_api/requests/login";
export const state = () => ({
  token: '',
  user: {
    username: "",
    email: "",
  } as User,
});

export const getters = {
  isAuthenticated: (state: any) => !!state.token,
  loggedUser: (state: any) => state.user,
};

export const mutations = {
  setToken(state: any, token: string) {
    state.token = token;
    localStorage.setItem('token', token);
  },
  setUser(state: any, user: User) {
    state.user = user;
  }
};

export const actions = {
  async login({ commit }: any, user: User) {
    const response = await login(user);
    commit("setToken", response.token);
    commit("setUser", response);
  }
};
