import { Employee } from "./Interfaces/employees";

export interface ApiResponse {
    success: boolean,
    message: string,
    result: Employee[]
  }
