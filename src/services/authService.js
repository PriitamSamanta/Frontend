// const API_BASE_URL = "http://127.0.0.1:5000";
// // ⚠️ yahan backend ka base URL hoga (confirm karo)

// export const loginUser = async (data) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();

//     if (!response.ok) {
//       throw new Error(result.message || "Login failed");
//     }

//     return result;
//   } catch (error) {
//     throw error;
//   }
// };

// export const registerUser = async (data) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/register`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();

//     if (!response.ok) {
//       throw new Error(result.message || "Registration failed");
//     }

//     return result;
//   } catch (error) {
//     throw error;
//   }
// };
import { mockLogin, mockRegister } from "../mock/mockBackend";

// 🔴 toggle (real backend aane par false)
const USE_MOCK = true;

// LOGIN
export const loginUser = async (data) => {
  if (USE_MOCK) {
    return await mockLogin(data);
  }

  // future real backend
  // return fetch(...)
};

// REGISTER
export const registerUser = async (data) => {
  if (USE_MOCK) {
    return await mockRegister(data);
  }

  // future real backend
};
