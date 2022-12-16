import { ECODE } from './constants';

export interface IKnexConfig {
  [key: string]: object;
}

export interface IResponse {
  status: ECODE;
  data: any;
}

export interface IMsg {
  msg: string;
}
