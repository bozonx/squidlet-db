import * as fs from 'fs/promises';
import {SquidletDbDocument} from './SquidletDbDocument';
import {FILE_ENCODING} from './constants';


export class FileWorks {
  private readonly rootPath: string


  constructor(rootPath: string) {
    this.rootPath = rootPath
  }


  async load(path: string, docId: string): Promise<SquidletDbDocument> {
    // TODO: наверное лучше добавить дату создания в имя файла
    // TODO: указать кодировку
    // TODO: убрать последний слэш
    const filePath = path + '/' + docId
    // TODO: handle error
    const res = await fs.readFile(filePath, FILE_ENCODING)

    return JSON.parse(res)
  }

  async create(path: string, docId: string, docData: Record<string, any>) {
    // TODO: make dir
  }

  async update(path: string, docId: string, docData: Record<string, any>) {
    // TODO: if doesn't exist - throw an error
    // TODO: make dir
  }

  async delete() {

  }

}