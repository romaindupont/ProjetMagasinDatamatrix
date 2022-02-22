export const DB_MOQ_LIST = 'DB_MOQ_LIST';
export const dbMoqList = () => ({
  type: DB_MOQ_LIST,
});

export const ADD_LIST_MOQ = 'ADD_LIST_MOQ';
export const addListMoq = (listMoq: string[]) => ({
  type: ADD_LIST_MOQ,
  listMoq,
});

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (newValue: string, key: string) => ({
  type: CHANGE_VALUE,
  newValue,
  key,
});

export const SAVE_SELECT_CASE = 'SAVE_SELECT_CASE';
export const saveSelectCase = (id: number, reference: string, moq: number) => ({
  type: SAVE_SELECT_CASE,
  id,
  reference,
  moq,
});

export const ADD_MOQ_IN_DB = 'ADD_MOQ_IN_DB';
export const addMoqInDb = (reference: string, moq: number) => ({
  type: ADD_MOQ_IN_DB,
  reference,
  moq,
});

export const ADD_MOQ = 'ADD_MOQ';
export const addMoq = (id: number, reference: string, moq: number) => ({
  type: ADD_MOQ,
  id,
  reference,
  moq,
});

export const UPDATED_MOQ_IN_DB = 'UPDATED_MOQ_IN_DB';
export const updatedMoqInDb = (id: number, reference: string, moq: number) => ({
  type: UPDATED_MOQ_IN_DB,
  id,
  reference,
  moq,
});

export const UPDATED_MOQ = 'UPDATED_MOQ';
export const updatedMoq = (id: number, reference: string, moq: number) => ({
  type: UPDATED_MOQ,
  id,
  reference,
  moq,
});

export const DELETE_MOQ_IN_DB = 'DELETE_MOQ_IN_DB';
export const deleteMoqInDb = (id: number) => ({
  type: DELETE_MOQ_IN_DB,
  id,
});

export const DELETE_MOQ = 'DELETE_MOQ';
export const deleteMoq = (id: number) => ({
  type: DELETE_MOQ,
  id,
});


