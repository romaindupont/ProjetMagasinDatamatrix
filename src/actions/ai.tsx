export const DB_AI_LIST = 'DB_AI_LIST';
export const dbAiList = () => ({
  type: DB_AI_LIST,
});

export const ADD_LIST_AI = 'ADD_LIST_AI';
export const addListAi = (listAi: string[]) => ({
  type: ADD_LIST_AI,
  listAi,
});
