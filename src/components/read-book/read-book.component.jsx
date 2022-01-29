import React, { useState } from "react";

import { Document, Page } from 'react-pdf';

import './read-book.styles.scss'

const ReadBook = (props) => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="read-book">
            <h1>props</h1>
            <Document file="" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
        </div>
    )
}

export default ReadBook;
