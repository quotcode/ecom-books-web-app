package com.shivam.ecombooks.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shivam.ecombooks.entities.Books;
import com.shivam.ecombooks.services.BookService;

/* below is the Controller annotation for REST(Representational State Transfer) API and 
	request first comes to this after main method is invoked
*/
@RestController
public class BooksController {
	
	@Autowired
	private BookService bookService;
	
	@GetMapping("/home")	
	public String home() {
		return ("Welcome to ecommerce application home page :)");
	}
	
	@GetMapping("/all-books")
	public List<Books> getBooks(){
		return this.bookService.getBooks();
	}
	
}
