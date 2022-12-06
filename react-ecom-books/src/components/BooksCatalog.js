import React from 'react'
import '../css/BooksCatalog.css'
import {AiFillStar} from "react-icons/ai";
import {AiOutlineStar} from "react-icons/ai";

const BooksCatalog = ({
    catalogCardImg,
    bookAuthor,
    bookPrice,
    bookPublishedOn,
    bookDesc,
    bookTitle,
    bookReviews
}) => {
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
                                {bookDesc}
                            </p>
                            <p className="card-text">
                                {bookAuthor}
                            </p>
                            <p className="card-text">
                                {bookPrice}
                            </p>
                            <p className="card-text">
                                {bookPublishedOn}
                            </p>
                            <p className="card-text">
                                {bookReviews}
                            </p>
                            <p className="card-text">
                                <small className="text-muted">Customer Suggested Age: more than 13 years</small>
                            </p>

                            <div className='row d-flex col-3 my-2 justify-content-start'>
                                <div className='col-1'><AiFillStar/></div>
                                <div className='col-1'><AiFillStar/></div>
                                <div className='col-1'><AiFillStar/></div>
                                <div className='col-1'><AiFillStar/></div>
                                <div className='col-1'><AiOutlineStar/></div>
                            </div>

                            <div className='row d-flex col-8'>
                                <div className='col-4'>
                                    <a href="#" className="btn btn-outline-dark">
                                        Add to cart 
                                    </a>
                                </div>
                                <div className='col-5'>
                                    <a href="#" className="btn btn-outline-dark">
                                        Add to wishlist
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default BooksCatalog