export const fetchKanjiDetails = async (character: string) => {
  try {
    const response = await fetch(
      `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${encodeURIComponent(
        character
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
    return data;
  } catch (error) {
    console.error("Error fetching Kanji details:", error);
    throw error;
  }
};
