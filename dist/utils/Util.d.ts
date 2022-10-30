export declare const swapArrayElement: (array: Array<unknown>, idx1: number, idx2: number) => unknown[];
export declare const getPadding: (open: boolean) => string;
export declare const debounce: <F extends (...args: any[]) => any>(func: F, waitFor: number) => (...args: Parameters<F>) => ReturnType<F>;
