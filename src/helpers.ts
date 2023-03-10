import path from 'node:path';
import {trimCharEnd} from 'squidlet-lib/src/strings'
import {SquidletDbConfig} from './types/SquidletDbConfig';
import moment from 'moment/moment';


export function makeFilePath(rootPath: string, localPath: string, fileName: string): string {
  return rootPath + path.sep + trimCharEnd(localPath) + path.sep + fileName
}

export function prepareConfig(config: SquidletDbConfig): SquidletDbConfig {
  return {
    ...config,
    rootPath: trimCharEnd(config.rootPath),
  }
}

export function makeCurrentIsoDateTime(): string {
  return moment().utc().format()
}