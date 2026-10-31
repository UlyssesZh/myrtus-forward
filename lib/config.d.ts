import { Schema, Dict } from 'koishi';
interface Source {
    channelId: string;
    name?: string;
    platform: string;
    blockingWords: string[];
    selfId: string;
    onlyQuote: boolean;
}
interface Target {
    selfId: string;
    channelId: string;
    platform: string;
    disabled: boolean;
    simulateOriginal: boolean;
    hidePrefix: boolean;
}
interface SourceConst extends Source {
    type: 'source';
}
interface TargetConst extends Target {
    type: 'target';
}
interface FullConst extends Target, Source {
    type: 'full';
}
export type RuleTarget = TargetConst | FullConst;
export type RuleSource = SourceConst | FullConst;
export interface Config {
    constants: Dict<SourceConst | TargetConst | FullConst, string>;
    rules: {
        source: string;
        targets: string[];
    }[];
    delay: Record<string, number>;
}
export declare const Config: Schema<Config>;
export {};
