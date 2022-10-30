import { Book } from "~/services/library_api/models/Book";
import { getBooks } from "~/services/library_api/requests/get_books";
export const state = () => ({
  books: [] as Book[],
  filteredBooks: [] as Book[],
  book: null,
});

export const getters = {
  books: (state: any) => state.books,
  filteredBooks: (state: any) => state.filteredBooks,
};

export const mutations = {
  setBooks(state : any, books: Book[]) {
    state.books = books;
    state.filteredBooks = books;
  },
  filterBooks(state: any, date: string) {
    state.filteredBooks = state.books.filter((book: Book) => book.createAt === date);
  }
};

export const actions = {
  async fetchBooks({ commit }: any) {
    const books = await getBooks();
    commit("setBooks", books);
  }
};
