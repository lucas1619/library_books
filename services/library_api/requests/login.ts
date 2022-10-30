import { User } from "../models/User";
import { LibraryApi } from "../LibraryApi";

function dtoToUser(dto: any): User {
  return {
    username: dto.data.user.username,
    email: dto.data.user.email,
    token: dto.data.accessToken,
  };
}

export async function login(user: User): Promise<User> {
  const api = new LibraryApi();
  const response = await api.post("auth/login", user);
  return dtoToUser(response);
}
