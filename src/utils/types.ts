export type KanjiData = {
  kanji: {
    character: string;
    strokes: number | null;
    onyomi: string;
    kunyomi: string;
    meaning: string;
  };
};

export type Input = {
  word: string;
};

export interface KanjiSearchResults {
  kanji: string;
  radical: string;
}

export interface InputProps {
  input: Input;
  setInput: React.Dispatch<React.SetStateAction<Input>>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}