export type KanjiData = {
  kanji: {
    character: string;
    strokes: number | null;
    onyomi: string;
    kunyomi: string;
    meaning: string;
  };
};
