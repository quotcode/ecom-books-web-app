package com.shivam.ecombooks.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Books {
	
	@Id
	private long bookID;
	private String bookName;	
	private String bookAuthor;
	private int bookPages;	
	private String bookGeneres;
	private double bookPrice;
	private String bookRecordInsertTime	;
	private String bookPublisher;
	private int bookRating;	
	private int bookEdition;	
	private String bookPublishedDate;
	private String bookCoverImgUrl;
	private long bookReviews;
	
	//default constructor for Books required for JPA
	public Books() {}
	
	public Books(long bookID, String bookName, String bookAuthor, double bookPrice) {
		super();
		this.bookID = bookID;
		this.bookName = bookName;
		this.bookAuthor = bookAuthor;
		this.bookPrice = bookPrice;
	}
	
	public long getBookID() {
		return bookID;
	}
	public String getBookName() {
		return bookName;
	}
	public String getBookAuthor() {
		return bookAuthor;
	}
	public int getBookPages() {
		return bookPages;
	}
	public String getBookGeneres() {
		return bookGeneres;
	}
	public double getBookPrice() {
		return bookPrice;
	}
	public String getBookRecordInsertTime() {
		return bookRecordInsertTime;
	}
	public String getBookPublisher() {
		return bookPublisher;
	}
	public int getBookRating() {
		return bookRating;
	}
	public int getBookEdition() {
		return bookEdition;
	}
	public String getBookPublishedDate() {
		return bookPublishedDate;
	}
	public String getBookCoverImgUrl() {
		return bookCoverImgUrl;
	}
	public long getBookReviews() {
		return bookReviews;
	}
	public void setBookID(long bookID) {
		this.bookID = bookID;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public void setBookAuthor(String bookAuthor) {
		this.bookAuthor = bookAuthor;
	}
	public void setBookPages(int bookPages) {
		this.bookPages = bookPages;
	}
	public void setBookGeneres(String bookGeneres) {
		this.bookGeneres = bookGeneres;
	}
	public void setBookPrice(double bookPrice) {
		this.bookPrice = bookPrice;
	}
	public void setBookRecordInsertTime(String bookRecordInsertTime) {
		this.bookRecordInsertTime = bookRecordInsertTime;
	}
	public void setBookPublisher(String bookPublisher) {
		this.bookPublisher = bookPublisher;
	}
	public void setBookRating(int bookRating) {
		this.bookRating = bookRating;
	}
	public void setBookEdition(int bookEdition) {
		this.bookEdition = bookEdition;
	}
	public void setBookPublishedDate(String bookPublishedDate) {
		this.bookPublishedDate = bookPublishedDate;
	}
	public void setBookCoverImgUrl(String bookCoverImgUrl) {
		this.bookCoverImgUrl = bookCoverImgUrl;
	}
	public void setBookReviews(long bookReviews) {
		this.bookReviews = bookReviews;
	}
	
	@Override
	public String toString() {
		return "Books [bookID=" + bookID + ", bookName=" + bookName + ", bookAuthor=" + bookAuthor + ", bookPages="
				+ bookPages + ", bookGeneres=" + bookGeneres + ", bookPrice=" + bookPrice + ", bookRecordInsertTime="
				+ bookRecordInsertTime + ", bookPublisher=" + bookPublisher + ", bookRating=" + bookRating
				+ ", bookEdition=" + bookEdition + ", bookPublishedDate=" + bookPublishedDate + ", bookCoverImgUrl="
				+ bookCoverImgUrl + ", bookReviews=" + bookReviews + "]";
	}
	
	
	
	
	
	
}
