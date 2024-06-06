import { authorsList } from "@/constants/authors";
import { CommonLangMetadata, PostLangMetadata } from "@/types/post";

const commonMetadata: CommonLangMetadata = {
  date: new Date('1995-07-31'),
  categories: ["applications", "android", "ios", "pwa"],
  image: "/img/home/3.jpeg",
  author: authorsList.fer,
};

export const esMetadata: PostLangMetadata = {
  ...commonMetadata,
  title: "Post Plantilla",
  description: "Description del post",
};

export const enMetadata: PostLangMetadata = {
  ...commonMetadata,
  title: "Post Template",
  description: "Post's Description",
};