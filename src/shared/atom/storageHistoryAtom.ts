export interface HistoryItem {
  [x: string]: Key | null | undefined;
  content: string;
}

import { atomWithStorage } from 'jotai/utils';
import { Key } from 'react';

export const useStorageHistoryAtom = atomWithStorage<HistoryItem[]>(
  'history',
  [],
);
