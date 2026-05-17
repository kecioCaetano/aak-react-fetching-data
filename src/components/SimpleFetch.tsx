import { useState, useEffect } from "react";

type Sidebar = { id: string; name: string }[];

export default function SimpleFetch() {
  const [state, setState] = useState<Sidebar>([]);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("https://api-sage-two-60.vercel.app/mocks/sidebar")
      ).json();

      setState(data);
    };
    dataFetch();
  }, []);

  return (
    <ul>
      {state.map((val) => (
        <li key={val.id}>{val.name}</li>
      ))}
    </ul>
  );
}
