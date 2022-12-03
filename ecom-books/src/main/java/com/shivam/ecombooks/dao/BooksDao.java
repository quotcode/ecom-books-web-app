package com.shivam.ecombooks.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shivam.ecombooks.entities.Books;

// JpaRepository<ENTITY, PK DATATYPE>
public interface BooksDao extends JpaRepository<Books, Long>{
	
}
