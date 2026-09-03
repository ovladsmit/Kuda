import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { loginReducer } from "features/AuthByUsername";
import { userReducer } from "entities/User";
export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    login: loginReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    preloadedState: initialState,
  });
}


export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];