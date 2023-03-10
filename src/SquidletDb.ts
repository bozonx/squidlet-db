import {SquidletDbDocument} from './types/SquidletDbDocument';
import {SquidletDbFilterRes} from './types/SquidletDbFilterRes';
import {FindHandler} from './types/types';
import {SquidletDbConfig} from './types/SquidletDbConfig';
import {FileWorks} from './types/FileWorks';
import {prepareConfig} from './helpers';


// TODO: добавить middleware для проверки прав и целостности связей
// TODO: версионирование делать за счёт файлового api ???


export class SquidletDb {
  private readonly config: SquidletDbConfig
  private readonly fileWorks: FileWorks


  constructor(config: SquidletDbConfig) {
    this.config = prepareConfig(config)
    this.fileWorks = new FileWorks(config.rootPath)
  }


  async init() {

  }

  async destroy() {

  }


  async getDoc(path: string, docId: string): Promise<SquidletDbDocument> {

  }

  async find(path: string, handler: FindHandler): Promise<SquidletDbDocument | null> {

  }

  async filter(path: string, handler: FindHandler): Promise<SquidletDbFilterRes> {

  }

  async create(path: string, docData: Record<string, any>): Promise<SquidletDbDocument> {
    // TODO: generate an id
    const docId = 'qwe'
    const document: SquidletDbDocument = {
      id: docId,
      path,
      data: docData,
      // TODO: add current time in utc
      created: '',
      // TODO: add current time in utc
      updated: '',
    }

  }

  async put(fullDoc: Record<string, any>): Promise<SquidletDbDocument>  {

  }

  async patch(partialDoc: Record<string, any>): Promise<SquidletDbDocument>  {

  }

  async delete(path: string, docId: string): Promise<SquidletDbDocument>  {

  }

  async move(oldPath: string, newPath: string): Promise<SquidletDbDocument>  {
    // TODO: поменять путь в самом документе
  }

  async createAll(path: string, docsData: Record<string, any>[]): Promise<SquidletDbDocument[]> {

  }

  async putAll(fullDocs: Record<string, any>): Promise<SquidletDbDocument[]> {

  }

  async patchAll(docPartials: SquidletDbDocument[]): Promise<SquidletDbDocument[]> {

  }

  async deleteAll(path: string, docIds: string[]): Promise<SquidletDbDocument[]> {

  }

}
