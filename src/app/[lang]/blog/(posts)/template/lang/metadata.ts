import { authorsList } from "@/constants/authors";
import { CommonLangMetadata, PostLangMetadata } from "@/types/post";

const commonMetadata: CommonLangMetadata = {
  date: new Date('1995-07-31'),
  categories: ["applications", "android", "ios", "pwa"],
  image: "/img/home/2.jpg",
  author: authorsList.jaky,
};

export const esMetadata: PostLangMetadata = {
  ...commonMetadata,
  title: "Post Copia",
  description: "Description del post",
};

export const enMetadata: PostLangMetadata = {
  ...commonMetadata,
  title: "Post Copy",
  description: "Post's Description",
};