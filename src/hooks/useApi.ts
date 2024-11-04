import { useEffect, useState } from "react";

export function useApi<T>(endpoint: string, method?: "POST") {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    if (method != "POST") {
      getData();
    }

    async function getData() {
      setIsLoading(true);
      try {
        const apiUrl = "http://26.225.50.6:5264/api/";
        console.log(`${apiUrl}${endpoint}`);
        await fetch(`${apiUrl}${endpoint}`)
          .then(async (res) => {
            setIsLoading(false);
            setData(await res.json());
          })
          .catch((err) => {
            setError(true);
            console.log("useApi Error: ", err);
          });
      } catch (error) {
        setError(true);
        console.log("useApi Exception: ", error);
      }
    }
  }, [endpoint, method]);

  async function postData(body: object) {
    setIsLoading(true);
    try {
      const apiUrl = "http://26.225.50.6:5264/api/";
      console.log(`${apiUrl}${endpoint}`);
      const requestOptions = {
        method: "POST",
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

  return { postData, isLoading, error, data };
}
