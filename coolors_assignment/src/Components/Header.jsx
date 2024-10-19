import ColosLogo from '../assets/logo.svg';
import icon_generate from '../assets/img/menu_icon_generate.svg';
import icon_explore from '../assets/img/menu_icon_explore.svg';
import image_picker from '../assets/img/menu_icon_image_picker.svg';
import contrast_checker from '../assets/img/menu_icon_contrast_checker.svg';
import icon_visualizer from '../assets/img/menu_icon_visualizer.svg';

export function Header() {
    return (
        <>
            <div className="route-homepage subroute-">
                <p></p>
            </div>

            <div id="header">
                <a id="header_logo" href="index106a.html?home">
                    <img src={ColosLogo} alt="Colos Logo" />
                </a>

                <nav className="nav nav--horizontal nav--large-padding" id="header_nav">
                    <ul>
                        <li>
                            <a href="" className="link link--black header_tools-btn">Tools</a>

                            <div className="big-menu" id="header_tools-menu">
                                <div className="big-menu_left">
                                    <ul>
                                        <li>
                                            <a href="generate.html">
                                                <img src={icon_generate} alt="Palette Generator" />
                                                <div>
                                                    <span>Palette Generator</span>
                                                    <span>Create your palettes in seconds</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="palettes.html">
                                                <img src={icon_explore} alt="Explore Palettes" />
                                                <div>
                                                    <span>Explore Palettes</span>
                                                    <span>Browse millions of trending color schemes</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="image-picker.html">
                                                <img src={image_picker} alt="Image Picker" />
                                                <div>
                                                    <span>Image Picker</span>
                                                    <span>Get beautiful palettes from your photos</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contrast-checker.html">
                                                <img src={contrast_checker} alt="Contrast Checker" />
                                                <div>
                                                    <span>Contrast Checker</span>
                                                    <span>Check the contrast between two colors</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="visualizer.html">
                                                <img src={icon_visualizer} alt="Palette Visualizer" />
                                                <div>
                                                    <span>
                                                        Palette Visualizer
                                                        <div className="badge badge--violet _m-l-1">New</div>
                                                    </span>
                                                    <span>Preview your colors on real designs</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="big-menu_right">
                                    <ul></ul>

                                    <li>
                                        <a className="link link--black" href="colors.html">List of colors
                                            <span className="badge badge--orange">New</span>
                                        </a>
                                    </li>
                                    <li><a className="link link--black" href="gradients.html">Browse Gradients</a></li>
                                    <li><a className="link link--black" href="gradient-maker.html">Create a Gradient</a></li>
                                    <li><a className="link link--black" href="gradient-palette.html">Make a Gradient Palette</a></li>
                                    <li><a className="link link--black" href="color-picker.html">Color Picker</a></li>
                                    <li><a className="link link--black" href="collage-maker.html">Collage Maker</a></li>
                                    <li><a className="link link--black" href="fonts.html">List of Fonts</a></li>
                                    <li><a className="link link--black" href="image-converter.html">Image Converter</a></li>
                                    <li><div>Apps</div></li>
                                    <li><a className="link link--black" href="https://apps.apple.com/app/coolors/id956480678">iOS App</a></li>
                                    <li><a className="link link--black" href="https://play.google.com/store/apps/details?id=co.coolors.android">Android App</a></li>
                                    <li><a className="link link--black" href="https://www.figma.com/community/plugin/1068919813159975006/Coolors">Figma Plugin</a></li>
                                    <li>
                                        <a className="link link--black adobe-download-btn" href="#">Adobe Extension
                                            <span className="badge badge--magenta">New</span>
                                        </a>
                                    </li>
                                </div>
                            </div>
                        </li>

                        <li><a href='' className="link link--primary header_go-pro-btn">Go Pro</a></li>
                        <li><span className="divider"></span></li>
                        <li className="hide-logged"><a className="link link--black header_signin-btn">Sign in</a></li>
                        <li className="hide-logged"><a className="btn btn--primary btn--s header_signup-btn">Sign up</a></li>
                        <li className="show-logged">
                            <a className="link link--secondary header_profile-avatar-btn">
                                <div className="avatar avatar--s header_profile-avatar" id="header_profile-avatar">
                                    <div className="image"></div>
                                </div>
                            </a>
                            <div id="header_profile-menu">
                                <ul>
                                    <li><a className="link link--black" href="signina14b.html">Dashboard</a></li>
                                    <li><div></div></li>
                                    <li><a className="link link--black header_profile-btn">Profile</a></li>
                                    <li><a className="link link--black" href="signin75b1.html">Account</a></li>
                                    <li><a className="link link--black header_signout-btn">Sign out</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>

            <div id="mobile-header">
                <a id="mobile-header_menu-btn">
                    <i className="icon icon-menu-16px"></i>
                    <i className="icon icon-remove-16px"></i>
                </a>
                <a id="mobile-header_logo" href="index.html">
                    <img src="assets/img/logo.svg" alt="Logo" />
                </a>
            </div>

            <div id="mobile-menu">
                <div id="mobile-menu_overlay"></div>
                <div id="mobile-menu_inner">
                    <ul>
                        <li><a href="generate.html">Palette Generator</a></li>
                        <li><a href="palettes.html">Explore Palettes</a></li>
                        <li><a href="image-picker.html">Image Picker</a></li>
                        <li><a href="contrast-checker.html">Contrast Checker</a></li>
                        <li><a href="fonts.html">List of Fonts<span className="badge badge--violet">New</span></a></li>
                    </ul>
                    <ul>
                        <li><div>Other tools</div></li>
                        <li><a href="colors.html">List of colors<span className="badge badge--orange">New</span></a></li>
                        <li><a href="gradients.html">Browse Gradients</a></li>
                        <li><a href="gradient-maker.html">Create a Gradient</a></li>
                        <li><a href="gradient-palette.html">Make a Gradient Palette</a></li>
                        <li><a href="color-picker.html">Color Picker</a></li>
                        <li><a href="collage-maker.html">Collage Maker</a></li>
                        <li><a href="image-converter.html">Image Converter</a></li>
                    </ul>
                    <ul>
                        <li><div>Jobs</div></li>
                        <li><a href="jobs">Job Board</a></li>
                        <li><a href="jobs/new">Post a Job</a></li>
                    </ul>
                    <ul>
                        <li><div>Apps</div></li>
                        <li><a href="https://apps.apple.com/app/coolors/id956480678">iOS App</a></li>
                        <li><a className="link link--black" href="https://play.google.com/store/apps/details?id=co.coolors.android">Android App</a></li>
                        <li><a className="link link--black" href="https://www.figma.com/community/plugin/1068919813159975006/Coolors">Figma Plugin</a></li>
                        <li><a href="https://chrome.google.com/webstore/detail/coolors-for-chrome/paebljbhhfgngkcldmbcogmkgegjgmbg">Chrome Extension</a></li>
                        <li><a href="https://www.instagram.com/coolors.co">Instagram Page</a></li>
                    </ul>
                    <ul id="mobile-menu_legal">
                        <li><a href="faq.html">FAQ</a></li>
                        <li><a href="privacy.html">Privacy</a></li>
                        <li><a href="terms.html">Terms</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
