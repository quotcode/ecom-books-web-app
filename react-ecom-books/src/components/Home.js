import React from 'react'

import VerticalItemCard from '../components/VerticalItemCard'
import BooksCatalogue from '../components/BooksCatalog'

import '../css/Home.css'
import heroImg1 from '../assets/hero-image-1.jpg'
import cardImg1 from '../assets/card-img-1.png'
import cardImg2 from '../assets/card-img-2.png'
import cardImg3 from '../assets/card-img-3.png'
import cardImg4 from '../assets/card-img-4.png'
import cardImg5 from '../assets/card-img-5.jpg'
import cardImg6 from '../assets/card-img-6.jpg'
import cardImg7 from '../assets/card-img-7.jpg'
import cardImg8 from '../assets/card-img-8.jpg'
import cardImg9 from '../assets/card-img-9.jpg'
import CatalogMenuItem from './CatalogMenuItem'

const Home = ({name}) => {
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
                    <button className="ctabtn btn btn-outline-light">Shop now</button>

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

                        <a
                            href="#"
                            className="list-group-item list-group-item-action"
                            aria-current="true">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{"Categories"}</h5>
                            </div>
                            <p className="mb-1">{"Health & Fitness"}</p>
                            <p className="mb-1">{"Food"}</p>
                            <p className="mb-1">{"Self Development"}</p>
                            <p className="mb-1">{"Romance & Love"}</p>
                            <p className="mb-1">{"Humour"}</p>
                        </a>

                        <a
                            href="#"
                            className="list-group-item list-group-item-action"
                            aria-current="true">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{"Authors"}</h5>
                            </div>
                            <p className="mb-1">{"Sort A-Z"}</p>
                            <p className="mb-1">{"Sort Z-A"}</p>
                            <p className="mb-1">{"Trending Authors"}</p>
                        </a>

                        <a
                            href="#"
                            className="list-group-item list-group-item-action"
                            aria-current="true">
                            <div className="m-3">
                                <h5 className="row">{"Price"}</h5>
                                <a className="catalog-menu-a-item row">{"Below Rs.200"}</a>
                                <a className="catalog-menu-a-item row">{"Between Rs.200 to Rs.500"}</a>
                                <a className="catalog-menu-a-item row">{"Above Rs.500"}</a>
                            </div>

                        </a>

                        <a
                            href="#"
                            className="list-group-item list-group-item-action"
                            aria-current="true">
                            <div className="m-3">
                                <h5 className="row">{"Ratings"}</h5>
                                <a className="catalog-menu-a-item row">{"5 Star"}</a>
                                <a className="catalog-menu-a-item row">{"4 Star"}</a>
                                <a className="catalog-menu-a-item row">{"3 & below"}</a>
                            </div>
                        </a>

                        <a
                            href="#"
                            className="list-group-item list-group-item-action"
                            aria-current="true">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{"Published On"}</h5>
                            </div>
                            <p className="mb-1">{"this month"}</p>
                            <p className="mb-1">{"this year"}</p>
                            <p className="mb-1">{"older"}</p>
                        </a>
                    </div>

                </div>
                <div className='catalog-right-side col-8'>
                    <div className='catalog-header'>
                        <h5 className=''>Booksy's Ulimate Cataloge
                        </h5>
                        <p className=''>All the books that are listed here are well curated and handpicked
                            <br></br>based on your current mood & readings.
                        </p>
                    </div>
                    <div className="catalog-contents">
                        <BooksCatalogue
                            catalogCardImg={cardImg5}
                            bookTitle={"bookTitle"}
                            bookAuthor={"bookAuthor"}
                            bookRating={"bookRating"}
                            bookReviews={"bookReviews"}
                            bookPublishedOn={"bookPublishedOn"}
                            bookDesc={"bookDesc"}
                            bookPrice={"bookPrice"}/>

                        <BooksCatalogue
                            catalogCardImg={cardImg6}
                            bookTitle={"bookTitle"}
                            bookAuthor={"bookAuthor"}
                            bookRating={"bookRating"}
                            bookReviews={"bookReviews"}
                            bookPublishedOn={"bookPublishedOn"}
                            bookDesc={"bookDesc"}
                            bookPrice={"bookPrice"}/>
                        <BooksCatalogue
                            catalogCardImg={cardImg7}
                            bookTitle={"bookTitle"}
                            bookAuthor={"bookAuthor"}
                            bookRating={"bookRating"}
                            bookReviews={"bookReviews"}
                            bookPublishedOn={"bookPublishedOn"}
                            bookDesc={"bookDesc"}
                            bookPrice={"bookPrice"}/>
                        <BooksCatalogue
                            catalogCardImg={cardImg8}
                            bookTitle={"bookTitle"}
                            bookAuthor={"bookAuthor"}
                            bookRating={"bookRating"}
                            bookReviews={"bookReviews"}
                            bookPublishedOn={"bookPublishedOn"}
                            bookDesc={"bookDesc"}
                            bookPrice={"bookPrice"}/>
                        <BooksCatalogue
                            catalogCardImg={cardImg9}
                            bookTitle={"bookTitle"}
                            bookAuthor={"bookAuthor"}
                            bookRating={"bookRating"}
                            bookReviews={"bookReviews"}
                            bookPublishedOn={"bookPublishedOn"}
                            bookDesc={"bookDesc"}
                            bookPrice={"bookPrice"}/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home