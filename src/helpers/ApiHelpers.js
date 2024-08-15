import { API_BASE_URL } from "../config";

const defaultHeaders = (token) => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  "Accept-Language": "*",
  Authorization: `Bearer ${token}`,
});

export const getHelper = async (url, token) => {
  const fullUrl = API_BASE_URL + url;
  const response = await fetch(fullUrl, {
    headers: defaultHeaders(token),
    method: "GET",
  });

  if (!response.ok) throw response;

  return response.json();
};

export const postHelper = async (url, request, token) => {
  const fullUrl = API_BASE_URL + url;
const response = await fetch(fullUrl, {
    headers: defaultHeaders(token),
    method: "POST",
    body: request ? JSON.stringify(request) : null,
  });

  if (!response.ok) throw response;

  return response.json();
};

export const postImageHelper = async (url, formData, token) => {
  const fullUrl = API_BASE_URL + url;
const response = await fetch(fullUrl, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: formData,
  });

  if (!response.ok) throw response;

  return response.json();
};

export const putHelper = async (url, request, token) => {
  const fullUrl = API_BASE_URL + url;
const response = await fetch(fullUrl, {
    headers: defaultHeaders(token),
    method: "PUT",
    body: request ? JSON.stringify(request) : null,
  });

  if (!response.ok) throw response;

  return response.json();
};

export const patchHelper = async (url, request, token) => {
  const fullUrl = API_BASE_URL + url;
const response = await fetch(fullUrl, {
    headers: defaultHeaders(token),
    method: "PATCH",
    body: request ? JSON.stringify(request) : null,
  });

  if (!response.ok) throw response;

  return response.json();
};

export const deleteHelper = async (url, token) => {
  const fullUrl = API_BASE_URL + url;
const response = await fetch(fullUrl, {
    headers: defaultHeaders(token),
    method: "DELETE",
  });

  if (!response.ok) throw response;

  return response.json();
};
