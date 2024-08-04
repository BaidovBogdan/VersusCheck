import { atomWithStorage } from 'jotai/utils';

export const useCardAtom = atomWithStorage<{ [key: string]: string }>(
  'card',
  {},
);

// Atom for current inputs
export const useInputsAtom = atomWithStorage<{
  [key: string]: { firstInput: string; secondInput: string };
}>('inputs', {});

// Atom for storing history
export const useStorageHistoryAtom = atomWithStorage<{
  [key: string]: { id: string; content: string }[];
}>('history', {});
