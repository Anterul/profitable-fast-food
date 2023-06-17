import { VIT_URL } from "../utils/Config";

function getResponseData(response) {
  if (!response.ok) {
    return Promise.reject(response.status);
  }
  return response.json();
}

function request(url, options) {
  return fetch(`${VIT_URL}${url}`, options).then(getResponseData);
}

export function getRestaurants() {
  return request("/restaurants", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
