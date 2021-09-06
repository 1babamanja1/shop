import httpCore from "../httpCore";

export const authenticate = (payload) => {
  const endpoint = httpCore.createFetch({
    url: "",
    method: "POST",
    data: payload,
  });
  return endpoint();
};

