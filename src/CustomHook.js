import React from "react";
import { useFetch } from "./useFetch";
import { useParams } from "./useParams";

export default function CustomHook() {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(data);

  const params = useParams();
  console.log(params);

  return <div>CustomHook</div>;
}
