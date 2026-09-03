import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/loginSchema";
import { loginByEmail } from "../services/loginByEmail";
import { registerByEmail } from "../services/registredByEmail";
const initialState: LoginSchema = {
  isLoading: false,
  username: "",
  password: "",
  error: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByEmail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginByEmail.fulfilled, (state) => {
        state.isLoading = false;
        state.username = '';
        state.password = '';
      })
      .addCase(loginByEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Error";
      })
      .addCase(registerByEmail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerByEmail.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(registerByEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Ошибка регистрации";
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
