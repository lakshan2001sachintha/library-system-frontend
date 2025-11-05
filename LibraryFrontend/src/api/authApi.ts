import axios from "axios";
import type { UserLogin, UserSignup, AuthResponse } from "../types";

// Base URL for all API requests related to authentication
const BASE_URL = "http://localhost:5145/api/auth";

// Register a new user
export const registerUser = async (userData: UserSignup): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(`${BASE_URL}/register`, userData);
    return response.data;
  } catch (err: any) {
    // Extract message from backend response
    if (err.response?.data?.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error("Registration failed. Please try again.");
  }
};

// Login user
export const loginUser = async (credentials: UserLogin): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(`${BASE_URL}/login`, credentials);
    return response.data;
  } catch (err: any) {
    // Extract message from backend response
    if (err.response?.data?.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error("Login failed. Please try again.");
  }
};

// Get user by ID
export const getUserById = async (userId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}`);
    return response.data;
  } catch (err: any) {
    if (err.response?.data?.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error("Failed to fetch user data.");
  }
};
