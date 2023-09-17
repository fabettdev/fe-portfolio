export function stringToWordsArray(string: string): string[] {
  const stringArray: string[] = string.split(" ");
  const result: string[] = [];

  stringArray.forEach((item: string, i: number) => {
    result.push(item);
    if (i !== stringArray.length - 1) {
      result.push(" ");
    }
  });

  return result;
}

export function stringToLettersArray(string: string): string[] {
  return string.split("");
}
