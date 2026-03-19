/* eslint-disable @typescript-eslint/no-explicit-any */
import secureStorage from 'react-secure-storage';

export const SetLocalStorage = (key: string, data: any) => {
  secureStorage.setItem(key, data);
};

export const GetLocalStorage = (key: string) => {
  return secureStorage.getItem(key);
};

export const RemoveLocalStorage = (key: string) => {
  secureStorage.removeItem(key);
};

export const ClearLocalStorage = () => {
  secureStorage.clear();
};
