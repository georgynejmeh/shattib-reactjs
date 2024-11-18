import { useEffect, useState } from "react";

export async function refreshToken() {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    console.error("No refresh token available.");
    return null;
  }

  try {
    const apiUrl = "https://shatib.com/api/";
    const response = await fetch(`${apiUrl}Accounts/RefreshToken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": localStorage.getItem("lang") || " ",
      },
      body: JSON.stringify({ refreshToken: refreshToken }),
    });

    if (!response.ok) {
      console.error("Failed to refresh token.");
      return null;
    }

    const data = await response.json();
    if (data?.accessToken && data?.refreshToken) {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      return data.accessToken;
    } else {
      console.error("Failed to retrieve new access token.");
      return null;
    }
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
}

export function useApi<T>(
  endpoint: string,
  method?: "POST" | "DELETE" | "GET",
  isToken?: boolean,
  noResponse?: boolean,
  dependencies?: [],
  contentType: string = "application/json"
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(
    () => {
      if (method != "POST" && method != "DELETE") {
        getData();
      }

      async function getData() {
        setIsLoading(true);
        try {
          // const apiUrl = `${import.meta.env.VITE_API_URL}`;
          const apiUrl = "https://shatib.com/api/";
          console.log(`${apiUrl}${endpoint}`);

          let token;
          let requestOptions;
          if (isToken) {
            token = localStorage.getItem("accessToken");
            console.log(token);
            requestOptions = {
              headers: {
                Authorization: `Bearer ${token}`,
                "Accept-Language":
                  localStorage.getItem("lang") === "en" ? "en" : " ",
              },
            };
          } else {
            requestOptions = {
              headers: {
                "Accept-Language":
                  localStorage.getItem("lang") === "en" ? "en" : " ",
              },
            };
          }

          fetch(`${apiUrl}${endpoint}`, requestOptions)
            .then(async (res) => {
              if (res.status === 401) {
                await refreshToken();
              }
              setIsLoading(false);
              setError(false);
              setData(await res.json());
            })
            .catch((err) => {
              setIsLoading(false);
              setError(true);
              console.log("useApi Error: ", err);
            });
        } catch (error) {
          setIsLoading(false);
          setError(true);
          console.log("useApi Exception: ", error);
        }
      }
    },
    dependencies ? [endpoint, method, ...dependencies] : [endpoint, method]
  );

  async function postData(body: object) {
    let token;
    if (isToken) {
      token = localStorage.getItem("accessToken");
    }

    setIsLoading(true);
    try {
      // const apiUrl = `${import.meta.env.VITE_API_URL}`;
      const apiUrl = "https://shatib.com/api/";
      console.log(`${apiUrl}${endpoint}`);
      let headers = {};
      if (token) {
        headers = {
          "Content-Type": contentType,
          Authorization: `Bearer ${token}`,
          "Accept-Language": " ",
        };
      } else {
        headers = {
          "Content-Type": "application/json",
          "Accept-Language": " ",
        };
      }
      console.log(headers);
      const requestOptions = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      };
      fetch(`${apiUrl}${endpoint}`, requestOptions)
        .then(async (res) => {
          if (res.status === 401) {
            await refreshToken();
          }
          setIsLoading(false);
          setError(false);
          if (!noResponse) {
            setData(await res.json());
          }
          // console.log(data, "data fetch");
          // console.log(res.json(), "res.json fetch");
        })
        .catch((err) => {
          setIsLoading(false);
          setError(true);
          console.log("useApi Error: ", err);
        });
    } catch (error) {
      setIsLoading(false);
      setError(true);
      console.log("useApi Exception: ", error);
    }
  }

  async function deleteData(id: number) {
    setIsLoading(true);
    try {
      // const apiUrl = `${import.meta.env.VITE_API_URL}`;
      const apiUrl = "https://shatib.com/api/";
      console.log(`${apiUrl}${endpoint}/${id}`);
      const requestOptions = {
        method: "DELETE",
      };
      fetch(`${apiUrl}${endpoint}/${id}`, requestOptions)
        .then(async (res) => {
          if (res.status === 401) {
            await refreshToken();
          }
          setIsLoading(false);
          setError(false);
          setData(await res.json());
        })
        .catch((err) => {
          setIsLoading(false);
          setError(true);
          console.log("useApi Error: ", err);
        });
    } catch (error) {
      setIsLoading(false);
      setError(true);
      console.log("useApi Exception: ", error);
    }
  }

  async function patchForm(body: FormData, isToken: boolean) {
    setIsLoading(true);
    const apiUrl = "https://shatib.com/api/";
    try {
      console.log(`${apiUrl}${endpoint}`);
      let headers = {};
      if (isToken) {
        const token = localStorage.getItem("accessToken");
        headers = {
          Authorization: `Bearer ${token}`,
          "Accept-Language": " ",
        };
      } else {
        headers = { "Accept-Language": " " };
      }
      const requestOptions = {
        method: "PATCH",
        body: body,
        headers: headers,
      };
      console.log(requestOptions);
      fetch(`${apiUrl}${endpoint}`, requestOptions)
        .then(async (res) => {
          if (res.status === 401) {
            await refreshToken();
          }
          setIsLoading(false);
          setError(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(true);
          console.log("useApi Error: ", err);
        });
    } catch (error) {
      setIsLoading(false);
      setError(true);
      console.log("useApi Exception: ", error);
    }
  }

  async function patchData(body: object) {
    setIsLoading(true);
    try {
      // const apiUrl = `${import.meta.env.VITE_API_URL}`;
      const apiUrl = "https://shatib.com/api/";
      console.log(`${apiUrl}${endpoint}`);
      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Accept-Language": " " },
        body: JSON.stringify(body),
      };
      fetch(`${apiUrl}${endpoint}`, requestOptions)
        .then(async (res) => {
          if (res.status === 401) {
            await refreshToken();
          }
          setIsLoading(false);
          setError(false);
          setData(await res.json());
        })
        .catch((err) => {
          setIsLoading(false);
          setError(true);
          console.log("useApi Error: ", err);
        });
    } catch (error) {
      setIsLoading(false);
      setError(true);
      console.log("useApi Exception: ", error);
    }
  }

  return { patchData, patchForm, deleteData, postData, isLoading, error, data };
}
