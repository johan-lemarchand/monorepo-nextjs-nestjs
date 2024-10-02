export type ServerUrlConfig = {
    prodUrl: string;
};
export declare const createGetServerUrl: (config: ServerUrlConfig) => () => string;
