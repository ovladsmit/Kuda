import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "entities/User";
import { registerWithEmail } from "features/AuthByUsername/api/loginApi";

interface LoginByEmailProps {
  username: string;
  password: string;
}

export const registerByEmail = createAsyncThunk<User, LoginByEmailProps, { rejectValue: string }>(
  "login/registerByEmail",
  async ({ username, password }, thunkApi) => {
    try {
      const firebaseUser = await registerWithEmail(username, password);
      const user: User = { id: firebaseUser.uid, username: firebaseUser.email ?? "" };
      thunkApi.dispatch(userActions.setAuthData(user));
      return user;
    } catch (e) {
      console.log(e);
      return thunkApi.rejectWithValue("Не удалось зарегистрироваться");
    }
  }
);