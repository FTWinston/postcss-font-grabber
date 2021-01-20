import fs from 'fs';
import http from 'http';
import url from 'url';

export interface FileSystem {
    createWriteStream: typeof fs.createWriteStream,
}

export type HttpGet = typeof http.get;

export interface FileInfo {
    fileName: string,
    filePath: string,
    size: number,
}

export interface Downloader {
    download(
        urlObject: url.UrlWithStringQuery,
        destinationDirectoryPath: string,
        timeout?: number
    ): Promise<FileInfo>;
}