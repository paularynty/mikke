"use client";

import styles from "@/styles/page.module.css";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };
  return (
    <>
      <h1>Oops!</h1>
      <p>Could not find page.</p>
      <button className={styles.button} onClick={() => handleClick("/")}>
        Back to home
      </button>
    </>
  );
}
