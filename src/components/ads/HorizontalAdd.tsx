import React, {useEffect} from 'react'

export const HorizontalAdd:React.FC = () => {
    const window = require('global')

    useEffect(() => {

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            console.log(window.adsbygoogle)
        }
        catch (e) {

        }

    },[]);



    return (
        <>
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-4250354979483117"
                data-ad-slot={1720853158}
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
        </>
    );
}

export default HorizontalAdd