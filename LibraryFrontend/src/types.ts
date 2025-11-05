//Define the structure of a Book object
export interface Book {
  id?: number;
  title: string;
  author: string;
  isbn: string;
  category: string;
}

// Define the structure of a User object
export interface User {
  id?: number;
  username: string;
  email: string;
  fullName?: string;
  createdAt?: string;
  lastLoginAt?: string;
}

// Define the structure for user registration/signup
export interface UserSignup {
  username: string;
  email: string;
  password: string;
  fullName?: string;
}

// Define the structure for user login
export interface UserLogin {
  usernameOrEmail: string;
  password: string;
}

// Define the structure for authentication response
export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
  token?: string;
}
