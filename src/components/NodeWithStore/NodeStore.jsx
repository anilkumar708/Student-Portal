// Component.tsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../Redux/dataSlice";

const NodeStore = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  console.log(data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default NodeStore;
