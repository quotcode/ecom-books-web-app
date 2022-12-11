import React from 'react'
import '../css/BooksCatalog.css'
import {AiFillStar} from "react-icons/ai";
import {AiOutlineStar} from "react-icons/ai";
import {Link} from 'react-router-dom';
import {BiRupee} from 'react-icons/bi';

const BooksCatalog = ({
    catalogCardImg,
    bookAuthor,
    bookPrice,
    bookPublishedOn,
    bookTitle,
    bookReviews,
    bookRating
}) => {

    const displayRatingStars = () => {
        let stars = [];
        const n = 4;
        for (let i = 0; i < n; ++i) {
            stars.push(
                <div className='col-sm-1'><AiFillStar/></div>
            );
        }
    }
    return (
        <div>
            <div className="catalog-card card mb-3">
                <div className="row g-0">
                    <div className="card-img-div col-md-4">
                        <img
                            src={catalogCardImg}
                            width={1000}
                            className="img-fluid rounded-start"
                            alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{bookTitle}</h5>

                            <p className="card-text">
                                by {bookAuthor + " "}
                                | Published on: {bookPublishedOn}
                            </p>

                            <p className="card-text">
                                Book Description
                            </p>
                            <div className='row col-sm-12'>
                                <div className='col-sm-6 d-flex'>
                                    {/* <div className='col-sm-1'><AiFillStar/></div>
                                    <div className='col-sm-1'><AiFillStar/></div>
                                    <div className='col-sm-1'><AiFillStar/></div>
                                    <div className='col-sm-1'><AiFillStar/></div>
                                    <div className='col-sm-1'><AiFillStar/></div> */}
                                    {[...Array(bookRating)].map((star) => {
                                        return (
                                            <div className='col-sm-1'><AiFillStar/></div>
                                        );
                                    })}
                                    {[...Array(5-bookRating)].map((star) => {
                                        return (
                                            <div className='col-sm-1'><AiOutlineStar/></div>
                                        );
                                    })}

                                    <p className='col-sm-1 my-1'>{"(" + bookRating + ")"}</p>
                                    <p className='col-sm-8 my-1'>| Total Reviews: {"(" + bookReviews + ")"}</p>
                                </div>

                            </div>
                            {/* <div className='col-1'><AiOutlineStar/></div> */}

                            <div className='row col-12 my-2'>
                                <div className='col-3'>
                                    <p className="card-text price-bold">
                                        <span><BiRupee/></span>{bookPrice}
                                    </p>
                                </div>
                                <div className='col-9 my-1'>
                                    <p className="card-text">
                                        <small className="text-muted">Customer Suggested Age: more than 13 years</small>
                                    </p>
                                </div>
                            </div>
                            <div className='row col-8 g-0 mt-2'>
                                <div className='col-3'>
                                    <Link to="/" className="btn btn-outline-dark">
                                        Add to cart
                                    </Link>
                                </div>
                                <div className='col-5'>
                                    <Link to="/" className="btn btn-outline-dark">
                                        Add to wishlist
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BooksCatalog;