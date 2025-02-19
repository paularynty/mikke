"use client";

import KanjiSearch from "@/components/KanjiSearch/KanjiSearch";
import { KanjiSearchResult } from "@/components/KanjiSearch/KanjiSearchResult";
import { Input } from "@/utils/types";
import { fetchKanjiSearchResult } from "@/lib/fetchKanjiSearchResult";
import styles from "@/styles/page.module.css";
import { useState, useEffect } from "react";
import { useError } from "@/hooks/useError";

export default function KanjiSearchPage() {
  const [data, setData] = useState<{ kanji: string }[] | null>(null);
  const [input, setInput] = useState<Input>({ word: "" });
  const { error, setErrorMessage } = useError();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    try {
      const resultData = await fetchKanjiSearchResult(input.word);
      setData(resultData);
      setStatus(resultData.length > 0 ? "success" : "error");
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to fetch Kanji data.");
      setStatus("error");
    }
  };

  useEffect(() => {
    if (error?.message !== "") {
      setStatus("error");
    }
  }, [error?.message]);

  return (
    <>
      <div>
        <KanjiSearch
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
        />
      </div>
      {status === "loading" && <p className={styles.loading}>Loading...</p>}

      {status === "success" && data ? <KanjiSearchResult data={data} /> : null}

      {status === "error" && <p className={styles.error}>No kanji found.</p>}
    </>
  );
}
