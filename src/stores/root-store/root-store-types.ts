import store from './root-store';

export type DispatchFunc = () => AppDispatchType;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
