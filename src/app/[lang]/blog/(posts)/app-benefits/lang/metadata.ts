import { authorsList } from "@/constants/authors";
import { CommonLangMetadata, PostLangMetadata } from "@/types/post";

const commonMetadata: CommonLangMetadata = {
  date: new Date('2024-06-05'),
  categories: ["custom-software", "applications"],
  image: "/img/home/2.jpg", // TODO: add image
  author: authorsList.fer,
};

export const enMetadata: PostLangMetadata = {
  ...commonMetadata,
  title: "",
  description: "",
  tags: ["app benefits", "custom software", "webapps", "websites", "applications"],
};

export const esMetadata: PostLangMetadata = {
  ...commonMetadata,
  title: "¿Porqué debería tener una app propia?",
  // TODO: review this description
  description: "Descubre los beneficios comerciales de tener una aplicación propia, incluyendo la mejora de la experiencia del cliente, el incremento de las ventas, el aumento de la retención y la fidelidad.",
  tags: ["beneficios de aplicaciones", "software personalizado", "aplicaciones web", "sitios web", "aplicationes"],
};