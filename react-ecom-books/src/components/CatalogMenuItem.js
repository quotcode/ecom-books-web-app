import React from 'react'

const CatalogMenuItem = ({menuItemHeading, menuItemContent, menuItemFooter}) => {
    return (
        <a
            href="#"
            className="list-group-item list-group-item-action"
            aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{menuItemHeading}</h5>
            </div>
            <p className="mb-1">{menuItemContent}</p>
            <small>{menuItemFooter}</small>
        </a>
    )
}

export default CatalogMenuItem