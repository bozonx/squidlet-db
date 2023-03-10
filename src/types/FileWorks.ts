import * as fs from 'node:fs/promises';
import {SquidletDbDocument} from './SquidletDbDocument';
import {FILE_ENCODING} from './constants';
import {makeFilePath} from '../helpers';


export class FileWorks {
  private readonly rootPath: string


  constructor(rootPath: string) {
    this.rootPath = rootPath
  }


  async load(path: string, docId: string): Promise<SquidletDbDocument> {
    // TODO: наверное лучше добавить дату создания в имя файла

    const filePath = makeFilePath(this.rootPath, path, docId)
    // TODO: handle error
    const res = await fs.readFile(filePath, FILE_ENCODING)
    const parsed = JSON.parse(res)

    return parsed
  }

  async create(path: string, docId: string, docData: Record<string, any>) {
    const filePath = makeFilePath(this.rootPath, path, docId)
    // TODO: make dir
  }

  async update(docToUpdate: SquidletDbDocument) {
    // TODO: if doesn't exist - throw an error
    // TODO: make dir
  }

  async delete() {

  }

}