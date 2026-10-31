import { Context } from 'koishi';
import { Config } from './config';
declare module 'koishi' {
    interface Tables {
        myrtus_forward_sent: Sent;
    }
}
interface Sent {
    from: string;
    to: string;
    from_sid: string;
    to_sid: string;
    from_channel_id: string;
    to_channel_id: string;
    time: Date;
    id?: number;
}
export declare function apply(ctx: Context, config: Config): void;
export {};
