import { ECODE } from './constants';
import { IResponse } from './interfaces';

export const handleResponse = ({
  message,
  status,
}: {
  message: any;
  status: number;
}): IResponse => {
  return {
    status,
    data: {
      ...message,
    },
  };
};
