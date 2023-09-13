import { stringToWordsArray, stringToLettersArray } from "./stringUtils";

export function stringToWordsElements(string: string, id: string) {
  const newString: string[] = stringToWordsArray(string);

  function mapWords(word: string, key: number) {
    return (
      <span key={key} className="inline-block overflow-hidden ">
        <span className={`inline-block ${id} relative  translate-y-full`}>
          {word === " " ? "\u00A0" : word}
        </span>
      </span>
    );
  }

  return newString.map(mapWords);
}

export function stringToLettersElements(string: string, id: string) {
  const newString: string[] = stringToLettersArray(string);

  function mapLetters(letter: string, key: number) {
    return (
      <span
        key={key}
        className={`${id} relative inline-block translate-y-full`}
      >
        {letter}
      </span>
    );
  }

  return newString.map(mapLetters);
}
