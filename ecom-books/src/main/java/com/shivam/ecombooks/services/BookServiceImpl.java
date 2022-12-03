package com.shivam.ecombooks.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.shivam.ecombooks.entities.Books;

@Service
public class BookServiceImpl implements BookService {

	List<Books> booksList;
	
	public BookServiceImpl () {
		booksList = new ArrayList<>();
		booksList.add(new Books(10001, "The Pyschology of Money", "Morgan Housel", 239.45));
		booksList.add(new Books(10002, "Notting Hill", "Shivam Yadav", 899.05));
	}
	
	@Override
	public List<Books> getBooks() {

		return booksList;
	}

}
