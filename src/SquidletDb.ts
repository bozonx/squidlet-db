import {makeUniqId} from 'squidlet-lib/src/uniqId';
import {SquidletDbDocument} from './types/SquidletDbDocument';
import {SquidletDbFilterRes} from './types/SquidletDbFilterRes';
import {FindHandler} from './types/types';
import {SquidletDbConfig} from './types/SquidletDbConfig';
import {FileWorks} from './types/FileWorks';
import {makeCurrentIsoDateTime, prepareConfig} from './helpers';
import {DOC_ID_LENGTH} from './types/constants';


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
    // TODO: add
  }

  async find(path: string, handler: FindHandler): Promise<SquidletDbDocument | null> {
    // TODO: add
  }

  async filter(path: string, handler: FindHandler): Promise<SquidletDbFilterRes> {
    // TODO: add
  }

  async create(path: string, docData: Record<string, any>): Promise<SquidletDbDocument> {
    const docId = makeUniqId(DOC_ID_LENGTH)
    const created = makeCurrentIsoDateTime()
    const fullDocument: SquidletDbDocument = {
      id: docId,
      path,
      data: docData,
      created,
      updated: created,
    }

    // TODO: handle error
    await this.fileWorks.create(path, docId, fullDocument)

    return fullDocument
  }

  async put(fullDoc: Record<string, any>): Promise<SquidletDbDocument>  {
    // TODO: add
  }

  async patch({path, id, data: newPartialData}: SquidletDbDocument): Promise<SquidletDbDocument>  {
    const prevDoc = await this.getDoc(path, id)
    const editedDoc = {
      // path, id, created
      ...prevDoc,
      updated: makeCurrentIsoDateTime(),
      data: {
        ...prevDoc.data,
        ...newPartialData,
      }
    }

    // TODO: handle error
    await this.fileWorks.update(editedDoc)

    return editedDoc
  }

  async delete(path: string, docId: string): Promise<SquidletDbDocument>  {
    // TODO: add
  }

  async move(oldPath: string, newPath: string): Promise<SquidletDbDocument>  {
    // TODO: поменять путь в самом документе
    // TODO: add
  }

  async createAll(path: string, docsData: Record<string, any>[]): Promise<SquidletDbDocument[]> {
    // TODO: add
  }

  async putAll(fullDocs: Record<string, any>): Promise<SquidletDbDocument[]> {
    // TODO: add
  }

  async patchAll(docPartials: SquidletDbDocument[]): Promise<SquidletDbDocument[]> {
    // TODO: add
  }

  async deleteAll(path: string, docIds: string[]): Promise<SquidletDbDocument[]> {
    // TODO: add
  }

}
