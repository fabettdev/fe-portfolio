import { stringToWordsArray, stringToLettersArray } from "./stringUtils";

export function stringToWordsElements(string: string, id: string) {
  const newString: string[] = stringToWordsArray(string);

  function mapString(item: string, key: number) {
    return (
      <span key={key} className="overflow-hidden inline-block">
        <span className={`${id} relative inline-block translate-y-full`}>
          {item}
        </span>
      </span>
    );
  }

  return newString.map(mapString);
}

export function stringToLettersElements(string: string, id: string) {
  const newString: string[] = stringToLettersArray(string);

  function mapString(item: string, key: number) {
    return (
      <span
        key={key}
        className={`${id} relative inline-block translate-y-full`}
      >
        {item}
      </span>
    );
  }

  return newString.map(mapString);
}
