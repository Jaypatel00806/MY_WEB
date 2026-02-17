import { useEffect, useState } from "react";

export default function DarkToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="bg-gray-800 text-white px-3 py-1 rounded dark:bg-yellow-400 dark:text-black"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
