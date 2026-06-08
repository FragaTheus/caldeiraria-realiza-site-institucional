import axios from "axios";

export const api = axios.create(
    {
        baseURL: "https://realiza-mail-service-latest.onrender.com/api/v1",
       
    }
)
export async function sendEmail(data: FormData) {
    return await api.post("/mail", data);
}

const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

api.interceptors.response.use(
  (response) => {
    (response.config as any).__sent = true;
    return response;
  },

  async (error) => {
    const config = error.config;

    if (!config) return Promise.reject(error);

    if (config.__sent) {
      return Promise.reject(error);
    }

    config.__retryCount = config.__retryCount || 0;

    const maxRetries = 10;

    const isNetworkError =
      error.code === "ERR_NETWORK" ||
      error.code === "ECONNABORTED" ||
      !error.response;

    const shouldRetry =
      config.__retryCount < maxRetries &&
      isNetworkError;

    if (shouldRetry) {
      config.__retryCount += 1;

      console.log(
        `Retry ${config.__retryCount}/${maxRetries} (conexão) em 10s...`
      );

      await sleep(10_000);

      return api(config);
    }

    return Promise.reject(error);
  }
);