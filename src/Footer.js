import React from 'react';






function Footer() {


    return (
        <>
            <div className='footer'>
                <footer >
                    <div className="bg-secondary text-light g-3 ">
                        <div className="row fw-bold ms-2 text-align-center ">
                            <div className="col-lg-3 col-xxl-4 ms-3">
                                <h3 className="mt-5 mb-4">Company</h3>
                                <a href="#" className="text-light text-decoration-none">
                                    <p>About Us</p>
                                </a>
                                <a href="#" className="text-light text-decoration-none">
                                    <p>Careers</p>
                                </a>
                                <a href="#" className="text-light text-decoration-none">
                                    <p>Contact Us</p>
                                </a>
                            </div>

                            <div className="col-lg-3 col-xxl-4 ms-3">
                                <h3 className="mt-5 mb-3 ">Support</h3>
                                <a href="#" className="text-light text-decoration-none">
                                    <p>Help Center</p>
                                </a>
                                <a href="#" className="text-light text-decoration-none">
                                    <p></p>
                                </a>
                            </div>

                            <div className="col-lg-3 col-xxl-4 ms-3">
                                <h3 className="mt-5 mb-3">Legal</h3>
                                <a href="#" className="text-light text-decoration-none">
                                    <p>Cookies Policy</p>
                                </a>
                                <a href="#" className="text-light text-decoration-none">
                                    <p>Privacy Policy</p>
                                </a>
                                <a href="#" className="text-light text-decoration-none">
                                    <p>Terms & Condition</p>
                                </a>
                            </div>
                        </div>
                        <hr />
                        <div className="social-links">
                            <div className="copyright mb-3 ms-3">
                                &copy; Copyright 2024 <strong><span>Skill Harvest </span></strong>. All Rights Reserved <i className="bi bi-innstagram"></i>
                            </div>
                            <div className="lg-ms-3 ms-3">
                                <a href="#" target="_blank" className="youtube"><i className="bi bi-youtube text-light h4 me-3"></i></a>
                                <a href="#" target="_blank" className="facebook"><i className="bi bi-facebook text-light h4 me-3 "></i></a>
                                <a href="#" target="_blank" className="instagram"><i className="bi bi-instagram text-light h4 me-3"></i></a>
                                <a href="#" target="_blank" className="linkedin"><i className="bi bi-linkedin text-light h4 me-3"></i></a>
                            </div>
                        </div>
                    </div>

                    <div id="preloader">
                        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
                            className="bi bi-arrow-up-short"></i></a>
                    </div>
                </footer>

            </div>
        </>
    );
}

export default Footer;
