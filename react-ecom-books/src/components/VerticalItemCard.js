import React from 'react'
import '../css/VerticalCard.css'
import {AiFillStar} from "react-icons/ai";
import {Link} from "react-router-dom";
const VerticalItemCard = ({cardImage, bookTitle, bookAuthor, bookRating, bookReviews}) => {
    return (

        <div
            className="card vertical-card"
            style={{
            max_width: "12rem"
        }}>
            <img src={cardImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h6 className="card-title">{bookTitle}</h6>
                <h6 className="card-title">{bookAuthor}</h6>
                <p className="card-text">
                    {bookReviews}
                </p>
                <div className='row d-flex my-2 justify-content-start'>
                    <div className='col-1'><AiFillStar/></div>
                    <div className='col-1'><AiFillStar/></div>
                    <div className='col-1'><AiFillStar/></div>
                    <div className='col-1'><AiFillStar/></div>
                    <div className='col-1'><AiFillStar/></div>
                    
                </div>

                <Link to="/" className="btn btn-outline-dark">
                    View
                </Link>
            </div>
        </div>
    )
}

export default VerticalItemCard