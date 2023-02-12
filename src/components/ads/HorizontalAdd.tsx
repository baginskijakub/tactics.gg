import React, {useEffect} from 'react'

export const HorizontalAdd:React.FC = () => {
    const window = require('global')

    useEffect(() => {

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
        catch (e) {

        }

    },[]);



    return (
        <div className='horizontal-ad-container'>
            <ins className="adsbygoogle"
                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                data-ad-client="ca-pub-4250354979483117"
                data-ad-slot={1720853158}
                data-ad-format="auto"
                data-full-width-responsive="true">

            </ins>
        </div>
    );
}

export default HorizontalAdd