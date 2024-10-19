import og_image from '../assets/img/og_image.png';

export function Hero() {
    return (
        <>
            <div className="wrapper" id="homepage">
                <div>
                    <div id="widget"></div>
                    <div className="container container--xxl container--fluid">

                        <div id="homepage_hero">

                            <div id="homepage_hero_text">
                                <div>
                                    <h1 id="homepage_hero_text_title">
                                        The super <span>fast</span> color palettes generator!
                                    </h1>
                                    <p>Create the perfect palette or get inspired by thousands of beautiful color schemes.</p>
                                    <div id="homepage_hero_text_btns">
                                        <a href="generate.html" className="btn btn--primary btn--m">
                                            Start the generator!
                                        </a>
                                        <a href="palettes.html" className="btn btn--secondary btn--m">
                                            Explore trending palettes
                                        </a>

                                        <a href="">
                                            <img 
                                                src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=9917&amp;theme=light&amp;period=monthly" 
                                                alt="Coolors - Super fast color schemes generator for cool designers | Product Hunt Embed" 
                                                style={{width: "250px", height: "54px"}} 
                                                width="250px" 
                                                height="54px" 
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div id="homepage_hero_image">
                                <img 
                                    id="homepage_hero_image-desktop" 
                                    src={og_image} 
                                    alt="Hero background" 
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
