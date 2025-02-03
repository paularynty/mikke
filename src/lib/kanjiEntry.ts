import { KanjiData } from "@/utils/types";

// export const fetchKanjiEntry = async (character: string) => {
export const fetchKanjiEntry = async (character: string) => {
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
    console.log("data:", data);

    console.log("Fetch success");

    const kanjiData: KanjiData["kanji"] | undefined = data?.kanji;
    const character: string = kanjiData?.character ?? "";
    const onyomiRomaji: string = kanjiData?.onyomi?.romaji ?? "";
    const katakana: string = kanjiData?.onyomi?.katakana ?? "";
    const kunyomiRomaji: string = kanjiData?.kunyomi?.romaji ?? "";
    const hiragana: string = kanjiData?.kunyomi?.hiragana ?? "";
    const english: string = kanjiData?.meaning?.english ?? "";
    const count: number = kanjiData?.strokes?.count ?? 0;

    return {
      character,
      onyomiRomaji,
      katakana,
      kunyomiRomaji,
      hiragana,
      english,
      count,
    };
    // console.log("Formatted data", kanjiData);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// export async function fetchKanjiList(): Promise<KanjiData[]> {
//   try {
//     const response = await fetch(
//       "https://kanjialive-api.p.rapidapi.com/api/public/kanji/all/",
//       {
//         method: "GET",
//         headers: {
//           "x-rapidapi-key":
//             "15ae912ac0mshafc017a046e3bb5p1e71e3jsn9cd9b768b7e9",
//           "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
//         },
//       }
//     );
//     if (!response.ok) {
//       throw new Error(`Error fetching data: ${response.statusText}`);
//     }
//     const data = await response.json();

//     if (!Array.isArray(data)) {
//       throw new Error("Data is not an array");
//     }

//     console.log("Fetch success");
//     return data.map((item: any) => ({
//       kanji: {
//         character: item.kanji.character,
//         strokes: item.kanji.strokes ? item.kanji.strokes.count : null,
//         onyomi: item.kanji.onyomi,
//         kunyomi: item.kanji.kunyomi,
//         meaning: item.kanji.meaning.english,
//       },
//     }));

//     // console.log("Formatted data", kanjiData);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// }
