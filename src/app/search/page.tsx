"use client";

import KanjiSearch from "@/components/KanjiSearch/KanjiSearch";
import {
  Input,
  KanjiSearchResults,
} from "@/components/KanjiSearch/KanjiSearch";
import { useState, useEffect } from "react";
import { fetchKanjiSearchResults } from "@/lib/kanjiSearch";
import { useError } from "@/hooks/useError";
import { KanjiSearchResult } from "@/components/KanjiSearch/KanjiSearchResult";

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
      setStatus("success");
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
      {status === "success" && data ? (
        <KanjiSearchResult />
      ) : status === "error" ? (
        <div>Error</div>
      ) : null}
    </>
  );
}
