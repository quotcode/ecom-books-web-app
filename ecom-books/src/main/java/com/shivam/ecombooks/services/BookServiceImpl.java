//package com.shivam.ecombooks.services;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.shivam.ecombooks.dao.BooksDao;
//import com.shivam.ecombooks.entities.Books;
//
//@Service
//public class BookServiceImpl implements BookService {
//
//	List<Books> booksList;
//	
//	public BookServiceImpl () {
//		booksList = new ArrayList<>();
//		booksList.add(new Books(10001, "The Pyschology of Money", "Morgan Housel", 239.45));
//		booksList.add(new Books(10002, "Notting Hill", "Shivam Yadav", 899.05));
//	}
//	
//	@Override
//	public List<Books> getBooks() {
//
//		return booksList;
//	}
//	
//	@Override
//	public Books getBookWithId(long bookId) {
//		Books res = null;
//		for(Books book:booksList) {
//			if(book.getBookID() == bookId) {
//				res = book;
//				break;
//			}
//		}
//		return res;
//	}
//
//	@Override
//	public String addBook(Books book) {
//		booksList.add(book);
//		return "Your books has been added successfully!";
//	}
//	
//	@Override
//	public String editBook(Books modifiedBook, long bookId) {
//		boolean modified = false;
//		for(Books existingBook: booksList) {
//			if(existingBook.getBookID() == bookId) {
//				existingBook.setBookName(modifiedBook.getBookName());
//				existingBook.setBookAuthor(modifiedBook.getBookAuthor());
//				existingBook.setBookPrice(modifiedBook.getBookPrice());
//				
//				modified = true;
//			}	
//		}
//		if(modified) {
//			return "Your book has been modified!";
//		}
//		else {
//			return "Your book couldn't be modified :( Please try again...";
//		}
//	}
//
//	@Override
//	public List<Books> deleteBookFromList(long bookId) {
//		for(Books book: booksList) {
//			if(book.getBookID() == bookId) {
//				System.out.println("Removing "+bookId);
//				booksList.remove(book);
//				break;
//			}
//		}
//		return booksList; 
//	}
//}
