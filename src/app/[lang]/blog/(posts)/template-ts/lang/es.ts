import { esMetadata } from "./metadata";

export const es = {
  metadata: esMetadata,
  content: {
    title: "Post Long Title",
    description: "This is a summarize of the post",
    section1: {
      title: "It could be a question",
      desc: "description about the question",
      items: [
        {
          title: "Item title 1",
          desc: "item description 1"
        },
        {
          title: "Item title 2",
          desc: "item description 2"
        }
      ],
      finalDesc: "This is a final description of the topic"
    },
    section2: {
      title: "It could be a question",
      desc: "description about the question",
      image: "/img/home/3.jpeg",
      finalDesc: "This is a final description of the topic"
    },
    conclusion: {
      title: "Conclusion",
      desc1: "First paragraph",
      desc2: "Second paragraph",
      desc3: "Third paragraph"
    }
  }
}