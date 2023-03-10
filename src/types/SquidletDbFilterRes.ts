import {SquidletDbDocument} from './SquidletDbDocument';

export interface SquidletDbFilterRes {
  count: number
  offset: number
  pageNum: number
  hasNext: boolean
  docs: SquidletDbDocument[]
}
