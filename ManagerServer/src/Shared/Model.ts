import { Account } from '../Server/Model';

// This will allow us to give different access to different users
export enum AccessRight {
  CREATE,
  READ,
  UPDATE,
  DELETE,
}

export interface UserCredentials extends Account {
  accessRights: AccessRight[];
}
