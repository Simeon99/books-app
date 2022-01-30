import React, { useState } from "react";

import { Document, Page ,pdfjs} from 'react-pdf';
import CustomButton from "../custom-button/custom-button.component";
import karantinija1 from './karantinija1.pdf'
// import karantinija2 from './karantinija2.pdf'

import './read-book.styles.scss'

  
const ReadBook = (props) => {
    pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
     const url = `/${props.knjiga.url}.pdf` 
    // const url = '/'+props.knjiga.url+'.pdf'
    const handleClickNexst = ()=>{
        // numPages = numPages +1 
        // console.log("AAA",numPages);
        setPageNumber(pageNumber+1)
    }
    const handleClickPrevios = ()=>{
        if(pageNumber>1)
            setPageNumber(pageNumber-1)
    }

    return (
        <div className="read-book">
            <h1>{props.knjiga.naziv}</h1>
           
           <div className="pdf"> 
                <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
            <span className="num-of-pages">{pageNumber}/{numPages}</span>
            <div className="buttons">
                <CustomButton type="submit" onClick={handleClickPrevios}>Predhodna</CustomButton>
                <CustomButton type="submit" onClick={handleClickNexst}>Sledeca</CustomButton>
            </div>
            
        </div>
    )
}

export default ReadBook;
