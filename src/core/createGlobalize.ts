import type { GlobalizeConfig } from './types';
import { setConfig } from './store';

export const createGlobalize = (config: GlobalizeConfig) => {
    setConfig(config);
};