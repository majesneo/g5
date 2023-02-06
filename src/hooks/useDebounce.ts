export default function debounce<T extends(...args: any[]) => any>(fn: T, ms = 100): T {
  let timeoutId: number;
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  } as T;
}
