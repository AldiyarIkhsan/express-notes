import { ContentRequest } from "../interfaces/content";
import { client } from "./client";

export const getContent = async (path: string): Promise<ContentRequest> => {
  return (await client.get(`/${path}.json`)).data;
};

export const postContent = async (path: string, payload: ContentRequest) => {
  return await client.post(`/${path}.json`, payload);
};

// export const putContent = async (path: string,dataId:string, payload: ContentRequest) => {
//     return await client.put(`/${path}.json`, payload);
//   };
