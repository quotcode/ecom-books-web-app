package com.shivam.ecombooks.services;

import java.util.List;

import com.shivam.ecombooks.entities.Books;

public interface BookService {
	public List<Books> getBooks();
	public Books getBookWithId(long bookId);
	public String addBook(Books book);
	public String editBook(Books modifiedBook, long bookId);
	public List<Books> deleteBookFromList(long bookId);
}
