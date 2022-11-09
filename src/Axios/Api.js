import { getWrapper, postWrapper, putWrapper, deleteWrapper } from "./Wrapper";

export const signUp = (data) => {
  console.log(data, "manan data");
  let url = `/blogger/signup`;
  return postWrapper(url , data);
};

export const login = (data) => {
  console.log(data, "manan data");
  let url = `/blogger/login`;
  return postWrapper(url , data);
};

export const getAllBlogs = () => {

  let url = `/getAllBlogs`;
  return getWrapper(url);
};