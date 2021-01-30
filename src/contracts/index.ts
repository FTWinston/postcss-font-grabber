import { ChildNode } from 'postcss';
import * as url from 'url';

export interface PluginOptions {
    cssSrc?: string,
    cssDest?: string,
    fontDir?: string,
    mkdir?: boolean,
    fontDownloader?: FontDownloader,
};

export interface PluginSettings {
    cssSourceDirectoryPath: string | undefined,
    cssDestinationDirectoryPath: string | undefined,
    fontDirectoryPath: string | undefined,
    autoCreateDirectory: boolean,
    fontDownloader?: FontDownloader,
};

export interface RemoteFont {
    urlObject: url.UrlWithStringQuery,
    format: string,
}

export interface Job {
    remoteFont: RemoteFont,
    css: {
        sourcePath: string,
        destinationDirectoryPath: string,
    },
    font: {
        path: string,
        filename: string,
    },
}

export interface JobResult {
    job: Job,
    download: {
        size: number,
    },
}

export interface Meta {
    jobResults: JobResult[],
}

export type DoneCallback = (meta: Meta) => void;

export type PostcssChildNodeProcessor = (node: ChildNode, index: number) => any;

export type Dictionary<U> = { [key: string]: U };

export interface FontDownloader {
    (job:Job): Promise<JobResult>,
}
