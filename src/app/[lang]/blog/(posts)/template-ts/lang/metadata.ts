import { CommonLangMetadata, PostLangMetadata } from "@/types/post";

const commonMetadata: CommonLangMetadata = {
  date: "2024-01-29T00:00:00Z",
  categories: ["applications", "android", "ios", "pwa"],
  image: "/img/home/3.jpeg",
  author: "Fernando Campos",
  authorImg: "/img/team/fer-2.png"
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