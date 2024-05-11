export type ContentItem = {
  page: string;
  title: string;
  content: string;
};

export type ContentRequest = {
  author: string,
  category: string,
  text: string
};

export interface ContentResponse {
  [key: string]: ContentRequest;
}
