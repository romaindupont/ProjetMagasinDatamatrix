export const ADD_FLASH_REFERENCE = 'ADD_FLASH_REFERENCE';
export const addFlashReference = (reference: string, idFlash: number) => ({
  type: ADD_FLASH_REFERENCE,
  reference,
  idFlash,
});

export const DELETE_FLASH_LIST = 'DELETE_FLASH_LIST';
export const deleteFlashList = () => ({
  type: DELETE_FLASH_LIST,
});

export const REMOVE_FLASH_LIST = 'REMOVE_FLASH_LIST';
export const removeFlashList = (idFlash: number) => ({
  type: REMOVE_FLASH_LIST,
  idFlash,
});

export const SELECT_FLASH_LIST = 'SELECT_FLASH_LIST';
export const selectFlashList = (idFlash: number) => ({
  type: SELECT_FLASH_LIST,
  idFlash,
});

export const SAVE_DB_AI = 'SAVE_DB_AI';
export const saveDbAi = (
  id: number,
  qDelivery: number,
  paletNumber: string,
  list: any[]
) => ({
  type: SAVE_DB_AI,
  id,
  qDelivery,
  paletNumber,
  list,
});

export const ADD_COUNTER_PALET = 'ADD_COUNTER_PALET';
export const addCounterPalet = () => ({
  type: ADD_COUNTER_PALET,
});
