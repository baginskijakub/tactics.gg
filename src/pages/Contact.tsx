import React from 'react'
import './pages.css'
import {PageHead} from './PageHead'

export const Contact:React.FC = () => {
    return (
        <div className="privacy-wrapper">
            <PageHead
                title="Contact"
                canonical="/contact"
                />
            <p className="body">If you would like to report a bug, add a new comp, give feedback or join us feel free to contact us!</p>
            <h4>Email: <a className="contact-email" href = "mailto: contact.tactix.gg@gmail.com">contact.tactix.gg@gmail.com</a></h4>
            
        </div>
    )
}

export default Contact
