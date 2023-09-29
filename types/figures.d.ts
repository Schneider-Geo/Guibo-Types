import { Elevation } from './elevation';
export interface Figures {
    distance?: number;
    up?: number;
    down?: number;
    highest?: number;
    lowest?: number;
    maxElevation?: number;
    minElevation?: number;
    elevationPoints?: Array<Elevation>;
}
