package com.shivam.ecombooks.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shivam.ecombooks.dao.BooksDao;
import com.shivam.ecombooks.entities.Books;

@Service
public class BookDBServiceImpl implements BookService {

	@Autowired
	private BooksDao booksDao;
	
	@Override
	public List<Books> getBooks() {
		return booksDao.findAll();
	}

	@Override
	public Books getBookWithId(long bookId) {
		return booksDao.getReferenceById(bookId);
	}

	@Override
	public String addBook(Books book) {
		booksDao.save(book);
		return "Book has been added successfully!";
	}

	@Override
	public String editBook(Books modifiedBook, long bookId) {
		//.save method will modify the record if its existing else it will add a new record
		booksDao.save(modifiedBook);
		return "Your book has been modified successfully!";
	}

	@Override
	public List<Books> deleteBookFromList(long bookId) {
		booksDao.deleteById(bookId);
		return booksDao.findAll();
	}

}
