import { UserData } from "types";

export const putValues = (key: string, value: UserData[]) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getValues = (key: string) => {
  const storedValue = localStorage.getItem(key);
  if (!storedValue) {
    return [];
  }
  return JSON.parse(storedValue);
};
