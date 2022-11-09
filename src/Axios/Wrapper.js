import axios from "./Axios";

// Wrapper Functions
export function getWrapper(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(url);
      return resolve(res.data);
    } catch (e) {
      return reject(e);
    }
  });
}

export function postWrapper(url, data) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(url, data);
      return resolve(res.data);
    } catch (e) {
      return reject(e);
    }
  });
}

export function putWrapper(url, data) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.put(url, data);
      return resolve(res.data);
    } catch (e) {
      return reject(e);
    }
  });
}

export function deleteWrapper(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.delete(url);
      return resolve(res.data);
    } catch (e) {
      return reject(e);
    }
  });
}
