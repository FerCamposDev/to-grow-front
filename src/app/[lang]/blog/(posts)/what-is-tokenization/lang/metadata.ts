import { authorsList } from "@/constants/authors";
import { CommonLangMetadata, PostLangMetadata } from "@/types/post";

const commonMetadata: CommonLangMetadata = {
  date: new Date('1996-01-20'),
  categories: ["tokens", "nft", "blockchain", "web3"],
  image: "/img/home/2.jpg",
  author: authorsList.jaky,
};

export const enMetadata: PostLangMetadata = {
  ...commonMetadata,
  title: "What is Tokenization?",
  description: "Explore how tokenizing real-world assets like real estate and art is opening new investment doors, making markets more accessible and transparent, and why this could be a game-changer in the world of investments.",
};

export const esMetadata: PostLangMetadata = {
  ...commonMetadata,
  title: "Qué es la Tokenización?",
  description: "Explore cómo la tokenización de activos del mundo real como bienes raíces y arte está abriendo nuevas puertas de inversión, haciendo que los mercados sean más accesibles y transparentes, y por qué esto podría cambiar el juego en el mundo de las inversiones.",
};