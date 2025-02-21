const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
  {
    title: "Jurassic Park2",
    author: "Michael Crichton",
  },
];

export const healthcheckResolvers = {
  Query: {
    books: () => {
      console.log("Querying books from resolver");
      return books;
    },
  },
};
