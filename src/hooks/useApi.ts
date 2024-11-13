import { useEffect, useState } from "react";

export function useApi<T>(
  endpoint: string,
  method?: "POST" | "DELETE" | "GET",
  isToken?: boolean,
  noResponse?: boolean,
  dependencies?: any[]
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
            requestOptions = {
              headers: { Authorization: `Bearer ${token}` },
            };
          }
          await fetch(`${apiUrl}${endpoint}`, requestOptions)
            .then(async (res) => {
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
    console.log(body);

    setIsLoading(true);
    try {
      // const apiUrl = `${import.meta.env.VITE_API_URL}`;
      const apiUrl = "https://shatib.com/api/";
      console.log(`${apiUrl}${endpoint}`);
      let headers = {};
      if (token) {
        headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
      } else {
        headers = { "Content-Type": "application/json" };
      }
      console.log(headers);
      const requestOptions = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      };
      await fetch(`${apiUrl}${endpoint}`, requestOptions)
        .then(async (res) => {
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
      await fetch(`${apiUrl}${endpoint}/${id}`, requestOptions)
        .then(async (res) => {
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
        headers = { Authorization: `Bearer ${token}` };
      }
      const requestOptions = {
        method: "PATCH",
        body: body,
        headers: headers,
      };
      console.log(requestOptions);
      await fetch(`${apiUrl}${endpoint}`, requestOptions)
        .then(async () => {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      await fetch(`${apiUrl}${endpoint}`, requestOptions)
        .then(async (res) => {
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
