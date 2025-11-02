"use client";
import { useState } from "react";
import FetchDisplay from "./Display";
import { fakeFetch, FetchType } from "./shared";

const Concurrent = () => {
  const [data, setData] = useState<string[]>([]);
  const [duration, setDuration] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchConcurrently = async () => {
    setLoading(true);
    setData([]);
    setDuration(0);

    const start = performance.now();

    const res = await Promise.all([
      fakeFetch("endpoint-1", 2000),
      fakeFetch("endpoint-2", 2000),
      fakeFetch("endpoint-3", 2000),
    ]);

    const end = performance.now();

    setData(res);
    setLoading(false);
    setDuration((end - start) / 1000);
  };

  return (
    <FetchDisplay
      data={data}
      duration={duration}
      loading={loading}
      type={FetchType.CONCURRENT}
      fetchData={fetchConcurrently}
    />
  );
};

export default Concurrent;
