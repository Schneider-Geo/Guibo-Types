export interface NavigationInstruction {
    lat?: number;
    lon?: number;
    sign?: number;
    text?: string;
    texts?: Record<string, string>;
    longtext?: string;
    longtexts?: Record<string, string>;
    voice?: string;
    voices?: Record<string, string>;
    uid?: string;
    dfs?: number;
    seq?: number;
    type?: string;
}
