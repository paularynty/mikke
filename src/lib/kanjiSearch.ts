export const fetchKanjiSearchResults = async (word: string) => {
  try {
    const response = await fetch(
      `https://kanjialive-api.p.rapidapi.com/api/public/search/${encodeURIComponent(
        word
      )}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "15ae912ac0mshafc017a046e3bb5p1e71e3jsn9cd9b768b7e9",
          "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("No Kanji results found for the given input.");
    }

    const results = data.map(({ kanji }: any) => ({
      kanji: kanji.character,
      // radical: radical.character,
    }));

    console.log("data:", results);
    return results;
  } catch (error) {
    console.error("Error fetching Kanji search results:", error);
    throw error;
  }
};
