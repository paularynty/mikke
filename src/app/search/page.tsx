"use client";

import KanjiSearch from "@/components/KanjiSearch/KanjiSearch";
import { KanjiSearchResult } from "@/components/KanjiSearch/KanjiSearchResult";
import { Input, KanjiSearchResults } from "@/utils/types";
import { fetchKanjiSearchResults } from "@/lib/kanjiSearch";
import { useState, useEffect } from "react";
import { useError } from "@/hooks/useError";

export default function KanjiSearchPage() {
  const [data, setData] = useState<KanjiSearchResults | null>(null);
  const [input, setInput] = useState<Input>({ word: "" });
  const { error, setErrorMessage } = useError();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("input:", input.word);
    setStatus("loading");
    setErrorMessage("");

    try {
      const resultData = await fetchKanjiSearchResults(input.word);
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
      {status === "loading" && <div>Loading...</div>}

      {status === "success" && data ? <KanjiSearchResult data={data} /> : null}

      {status === "error" && <div>Error: No Kanji results found.</div>}
    </>
  );
}

{
  /* {hasSearched && (
        <>
          <h2>Search results</h2>
          <div className="result">
            <div className={styles.gridContainer}>
              {kanjiResults.length > 0 ? (
                kanjiResults.map((kanji, index) => (
                  <div
                    className={styles.gridItem}
                    key={index}
                    onClick={() => (window.location.href = `/kanji/${kanji}`)}
                  >
                    {kanji}
                  </div>
                ))
              ) : (
                <div>No kanji found.</div>
              )}
            </div>
          </div>
        </>
      )} */
}
