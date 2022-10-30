import { LibraryApi } from "../LibraryApi";
import { Book } from "../models/Book";

function dtoToArrayBook(dto: any[]): Book[] {
  return dto.map((book: any) => ({
    id: book.id,
    cover: book.cover,
    isbn: book.isbn,
    url: book.url,
    title: book.title,
    author: book.author,
    category: book.category,
    createAt: book.createAt,
  } as Book));
}

export async function getBooks(): Promise<Book[]> {
  const api = new LibraryApi();
  const response = await api.get("books");
  return dtoToArrayBook(response.data);
}
