"use client";
import { useState } from "react";
import FetchDisplay from "./Display";
import { fakeFetch, FetchType } from "./shared";

const Serial = () => {
  const [data, setData] = useState<string[]>([]);
  const [duration, setDuration] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchSerially = async () => {
    setLoading(true);
    setData([]);
    setDuration(0);

    const start = performance.now();

    const res1 = await fakeFetch("endpoint-1", 2000);
    const res2 = await fakeFetch("endpoint-2", 2000);
    const res3 = await fakeFetch("endpoint-3", 2000);

    const end = performance.now();

    setData([res1, res2, res3]);
    setLoading(false);
    setDuration((end - start) / 1000);
  };

  return (
    <FetchDisplay
      data={data}
      duration={duration}
      loading={loading}
      type={FetchType.SERIAL}
      fetchData={fetchSerially}
    />
  );
};

export default Serial;
