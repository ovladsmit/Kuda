import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "entities/User";
import { loginWithEmail } from "features/AuthByUsername/api/loginApi";

interface loginByEmailProps {
  username: string;
  password: string;
}
export const loginByEmail = createAsyncThunk<
  User,
  loginByEmailProps,
  { rejectValue: string }
>("login/loginByEmail", async ({ username, password }, thunkApi) => {
  try {
    const firebaseUser = await loginWithEmail(username, password);
    const user: User = {
      id: firebaseUser.uid,
      username: firebaseUser.email ?? "",
    };
    thunkApi.dispatch(userActions.setAuthData(user));
    return user;
  } catch (e) {
    console.log(e);
    return thunkApi.rejectWithValue("Вы ввели неверный логин или авроль");
  }
});
