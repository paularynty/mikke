// export type KanjiData = {
//   kanji: {
//     character: string;
//     strokes: number | null;
//     onyomi: string;
//     kunyomi: string;
//     meaning: string;
//   };
// };

export type KanjiData = {
  kanji: {
    character: string;
    onyomi: { romaji: string; katakana: string };
    kunyomi: { romaji: string; hiragana: string };
    meaning: { english: string };
    strokes: { count: number | null };
  };
};

export type Input = {
  word: string;
};

export interface KanjiSearchResults {
  kanji: string;
  // radical: string;
}

export interface InputProps {
  input: Input;
  setInput: React.Dispatch<React.SetStateAction<Input>>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}
