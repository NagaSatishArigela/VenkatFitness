import React, { useEffect } from 'react';

const ContactUs = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div className="visme_d" data-title="venketfitness" data-url="pvmkr6dv-venket-fitness" data-domain="forms" data-full-page="false" data-min-height="800px" data-form-id="47333"></div>
        </div>
    );
};
 
export default ContactUs;
