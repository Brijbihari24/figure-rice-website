import React, { useEffect } from 'react';

const InstagramEmbed = ({ postUrl }) => {
    useEffect(() => {
        // Load Instagram's embed script when the component is mounted
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        // Cleanup the script when the component is unmounted
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <section className="instagram mt-3 mb-5">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4">
                            <div className="instagram-post">
                                <blockquote
                                    className="instagram-media"
                                    data-instgrm-permalink="https://www.instagram.com/p/DE1w0I4t1WX/?utm_source=ig_embed&amp;utm_campaign=loading"
                                    data-instgrm-version="13"
                                    style={{ background: 'transparent', border: '0', padding: '0', margin: '0' }}
                                >
                                    <a href="https://www.instagram.com/p/DE1w0I4t1WX/?utm_source=ig_embed&amp;utm_campaign=loading">Instagram Post</a>
                                </blockquote>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="instagram-post">
                                <blockquote
                                    className="instagram-media"
                                    data-instgrm-permalink="https://www.instagram.com/p/DECKqcktvBD/?utm_source=ig_embed&amp;utm_campaign=loading"
                                    data-instgrm-version="13"
                                    style={{ background: 'transparent', border: '0', padding: '0', margin: '0' }}
                                >
                                    <a href="https://www.instagram.com/p/DECKqcktvBD/?utm_source=ig_embed&amp;utm_campaign=loading">Instagram Post</a>
                                </blockquote>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="instagram-post">
                                <blockquote
                                    className="instagram-media"
                                    data-instgrm-permalink="https://www.instagram.com/p/DBTHyAVT-dB/?utm_source=ig_embed&amp;utm_campaign=loading"
                                    data-instgrm-version="13"
                                    style={{ background: 'transparent', border: '0', padding: '0', margin: '0' }}
                                >
                                    <a href="https://www.instagram.com/p/DBTHyAVT-dB/?utm_source=ig_embed&amp;utm_campaign=loading">Instagram Post</a>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InstagramEmbed;
