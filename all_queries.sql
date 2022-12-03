create database books_universe;
use books_universe;

create table books_info (
	BookID int auto_increment primary key,
    BookName varchar(100) not null,
    BookAuthor varchar(100) not null,
    BookPages int,
    BookGeneres varchar(200),
    BookPrice float,
    BookRecordInsertTime timestamp default current_timestamp,
    BookPublisher varchar(100),
    BookRating int,
    BookEdition int,
    BookPublishedDate datetime,
    BookCoverImgUrl varchar(150),
    BookReviews int
    );
	

create table users_info (
	UserName int auto_increment primary key,
    UserEmail varchar(50) not null,
    UserPhone int(10),
    UserDOB datetime,
    UserPincode varchar(10),
    UserState varchar(20),
    UserCtry varchar(20),
    UserType varchar(15),
    UserRecordInsertTime timestamp default current_timestamp
    );

-- alter queries
alter table books_universe.users_info modify UserPhone  bigint;

-- insert queries for UserState
insert into books_universe.users_info (UserEmail, UserPhone, UserDOB, UserPincode, UserState, UserCtry, UserType) 
values ("ryan1@gmail.com", 9999888812, "2000-03-23", "401789", "Arunachal Pradesh", "India", "Customer");  -- UserDOB : YYYY-MM-DD


-- insert queries for Books
insert into books_universe.books_info (BookName, BookAuthor, BookPages, BookGeneres, BookPrice, BookRating)
values ("First Job", "Shivam Yadav", 107, "['SelfGrowth','PositiveMindset']", 290.34, 4 );
 
insert into books_universe.books_info (BookName, BookAuthor, BookPages, BookGeneres, BookPrice, BookRating)
values ("Life beyond the borders", "Sam Parker", 330, "['Life']", 390.456, 3 );
 
insert into books_universe.books_info (BookName, BookAuthor, BookPages, BookGeneres, BookPrice, BookRating)
values ("Notting Hill", "Shivam Yadav", 220, "['Drama','Love','Humour']", 340.44, 4 );

insert into books_universe.books_info (BookName, BookAuthor, BookPages, BookGeneres, BookPrice, BookRating)
values ("500 days of summer", "Shivam Yadav", 197, "['Teenage','Love']", 190.34, 5 );
 
insert into books_universe.books_info (BookName, BookAuthor, BookPages, BookGeneres, BookPrice, BookRating)
values ("The Young Guy", "Shivam Yadav", 234, "['Teenage','PeerPressure']", 13460.64, 5 );
 
insert into books_universe.books_info (BookName, BookAuthor, BookPages, BookGeneres, BookPrice, BookRating)
values ("The Amazing South Sudan", "Shivam Yadav", 398, "['Country','Patriotism']", 188.94, 4 );


------------- JSON DATA FOR RESTAPI

[
    {
        "bookID": 10001,
        "bookName": "The Pyschology of Money",
        "bookAuthor": "Morgan Housel",
        "bookPages": 0,
        "bookGeneres": null,
        "bookPrice": 239.45,
        "bookRecordInsertTime": null,
        "bookPublisher": null,
        "bookRating": 0,
        "bookEdition": 0,
        "bookPublishedDate": null,
        "bookCoverImgUrl": null,
        "bookReviews": 0
    },
    {
        "bookID": 10002,
        "bookName": "Notting Hill",
        "bookAuthor": "Shivam Yadav",
        "bookPages": 0,
        "bookGeneres": null,
        "bookPrice": 899.05,
        "bookRecordInsertTime": null,
        "bookPublisher": null,
        "bookRating": 0,
        "bookEdition": 0,
        "bookPublishedDate": null,
        "bookCoverImgUrl": null,
        "bookReviews": 0
    }
]

-------------------