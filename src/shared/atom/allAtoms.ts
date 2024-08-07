import { atomWithStorage } from 'jotai/utils';

export const useCardAtom = atomWithStorage<{ [key: string]: string }>(
  'card',
  {},
);

export const useInputsAtom = atomWithStorage<{
  [key: string]: { firstInput: string; secondInput: string };
}>('inputs', {});

export const useStorageHistoryAtom = atomWithStorage<{
  [key: string]: { id: string; content: string }[];
}>('history', {});
