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
  tags: ["aplicaciones nativas", "aplicaciones", "android", "ios", "pwa"],
};

export const enMetadata: PostLangMetadata = {
  ...commonMetadata,
  title: "Post Template",
  description: "Post's Description",
  tags: ["applications", "native applications", "android", "ios", "pwa"],
};