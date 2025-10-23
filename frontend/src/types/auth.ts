export interface User {
  id: string;
  name: string;
  email: string;
  status: "online" | "offline" | "away";
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}