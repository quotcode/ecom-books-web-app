import React from 'react'

import heroImg1 from '../assets/hero-image-1.jpg'
import cardImg1 from '../assets/card-img-1.png'
import cardImg2 from '../assets/card-img-2.png'
import cardImg3 from '../assets/card-img-3.png'
import cardImg4 from '../assets/card-img-4.png'
import cardImg7 from '../assets/card-img-7.jpg'
import '../css/Home.css'

import VerticalItemCard from '../components/VerticalItemCard'
import BooksCatalogue from '../components/BooksCatalog'

import toast from 'react-hot-toast';
import axios from 'axios';
import {useEffect, useState} from 'react';
import base_url from "./../api/springbootAPI";
import {Link} from 'react-router-dom'

const Home = ({name}) => {
    // Array of objects
    const [books,setBooks] = useState([]);
    
    // // Book Object for above array of books
    // const [book, setBook] = useState({});

    // Start: Fetching all the books data through Spring Boot Rest API
    const getAllBooksFromSpringBootRestAPI = () => {
        axios
            .get(`${base_url}/all-books`)
            .then(
            // if success
            (response) => {
                console.log("-----------your data is loaded----------", response.data);
                setBooks(response.data);
                toast.success("your data has been loaded!")
            },
            // if failure
            (error) => {
                console.log(error);
                toast.error("Sorry :( , your data couldn't be loaded!")
            })
    }

    useEffect(() => {
        getAllBooksFromSpringBootRestAPI();
    }, []);

    // End: Fetching all the books data through Spring Boot Rest API

    // Function that display individual book data
    const displayAllBookData = books.map((b) => {
        return (
            <div>
                <BooksCatalogue
                    catalogCardImg={cardImg7}
                    bookId={b.bookId}
                    bookTitle={b.bookName}
                    bookAuthor={b.bookAuthor}
                    bookRating={b.bookRating}   //rating: long integer
                    bookReviews={b.bookReviews} //review: double out of 5
                    bookPublishedOn={b.bookPublishedDate}
                    bookPrice={b.bookPrice}/>
            </div>
        );
    });

    const shopNowNotify = () => toast('Coming soon!', {duration: 800});
    return (
        <div>
            <div className="hero-card card text-white">
                <img src={heroImg1} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h2 className="card-text">
                        Books that are Trending, Classic, or Genere specific.
                        <br></br>
                        You name it we have it.
                    </h2>
                    <p className="card-text pic-credit">Picture Credits: Pexels</p>
                    <button className="ctabtn btn btn-outline-light" onClick={shopNowNotify}>Shop now</button>
                    <div className='row my-4 d-flex justify-content-end'>
                        <div className='col-sm-2'><VerticalItemCard
                            cardImage={cardImg1}
                            bookTitle={"bookTitle"}
                            bookAuthor={"bookAuthor"}
                            bookRating={"bookRating"}
                            bookReviews={"bookReviews"}/></div>
                        <div className='col-sm-2'><VerticalItemCard
                            cardImage={cardImg2}
                            bookTitle={"bookTitle"}
                            bookAuthor={"bookAuthor"}
                            bookRating={"bookRating"}
                            bookReviews={"bookReviews"}/></div>
                        <div className='col-sm-2'><VerticalItemCard
                            cardImage={cardImg3}
                            bookTitle={"bookTitle"}
                            bookAuthor={"bookAuthor"}
                            bookRating={"bookRating"}
                            bookReviews={"bookReviews"}/></div>
                        <div className='col-sm-2'><VerticalItemCard
                            cardImage={cardImg4}
                            bookTitle={"bookTitle"}
                            bookAuthor={"bookAuthor"}
                            bookRating={"bookRating"}
                            bookReviews={"bookReviews"}/></div>
                    </div>

                </div>
            </div>

            <div className='catalog-section row d-flex'>
                <div className='catalog-menu col-3 my-2'>
                    <div className="list-group">

                        <Link
                            to="/"
                            className="list-group-item list-group-item-action"
                            aria-current="true">
                            <div className="m-3">
                                <h5 className="row">{"Categories"}</h5>
                                <Link className="catalog-menu-a-item row">{"Health & Fitness"}</Link>
                                <Link className="catalog-menu-a-item row">{"Food"}</Link>
                                <Link className="catalog-menu-a-item row">{"Self Development"}</Link>
                                <Link className="catalog-menu-a-item row">{"Romance & Love"}</Link>
                                <Link className="catalog-menu-a-item row">{"Humour"}</Link>
                            </div>
                        </Link>

                        <Link
                            to="/"
                            className="list-group-item list-group-item-action"
                            aria-current="true">
                            <div className="m-3">
                                <h5 className="row">{"Authors"}</h5>
                                <Link className="catalog-menu-a-item row">{"Sort A-Z"}</Link>
                                <Link className="catalog-menu-a-item row">{"Sort Z-A"}</Link>
                                <Link className="catalog-menu-a-item row">{"Trending Authors"}</Link>
                            </div>
                        </Link>

                        <Link
                            to="/"
                            className="list-group-item list-group-item-action"
                            aria-current="true">
                            <div className="m-3">
                                <h5 className="row">{"Price"}</h5>
                                <Link className="catalog-menu-a-item row">{"Below Rs.200"}</Link>
                                <Link className="catalog-menu-a-item row">{"Between Rs.200 to Rs.500"}</Link>
                                <Link className="catalog-menu-a-item row">{"Above Rs.500"}</Link>
                            </div>

                        </Link>

                        <Link
                            to="/"
                            className="list-group-item list-group-item-action"
                            aria-current="true">
                            <div className="m-3">
                                <h5 className="row">{"Ratings"}</h5>
                                <Link className="catalog-menu-a-item row">{"5 Star"}</Link>
                                <Link className="catalog-menu-a-item row">{"4 Star"}</Link>
                                <Link className="catalog-menu-a-item row">{"3 & below"}</Link>
                            </div>
                        </Link>

                        <Link
                            to="/"
                            className="list-group-item list-group-item-action"
                            aria-current="true">
                            <div className="m-3">
                                <h5 className="row">{"Published on"}</h5>
                                <Link className="catalog-menu-a-item row">{"this month"}</Link>
                                <Link className="catalog-menu-a-item row">{"this year"}</Link>
                                <Link className="catalog-menu-a-item row">{"older"}</Link>
                            </div>
                        </Link>

                    </div>

                </div>
                {/* Displaying dynamic data using  Spring Boot REST API port:8080*/}
                <div className='catalog-right-side col-8'>
                    <div className='catalog-header'>
                        <h5 className=''>Booksy's Ulimate Cataloge
                        </h5>
                        <p className=''>All the books that are listed here are well curated and handpicked
                            <br></br>based on your current mood & readings.
                        </p>
                    </div>
                    <div className="catalog-contents" key="all-books">
                        {displayAllBookData}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home