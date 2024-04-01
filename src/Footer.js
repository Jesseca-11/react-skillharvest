import React from 'react'

function Footer() {
    return (
        <div>
            <footer>
                <section class="bg-secondary text-light g-3">
                    <div class="row fw-bold ms-2 text-align-center ">
                        <div class="col-lg-3 col-xxl-4 ms-3">
                            <h3 class="mt-5 mb-4">Company</h3>
                            <a href="#" class="text-light text-decoration-none">
                                <p>About Us</p>
                            </a>
                            <a href="#" class="text-light text-decoration-none">
                                <p>Careers</p>
                            </a>
                            <a href="#" class="text-light text-decoration-none">
                                <p>Contact Us</p>
                            </a>
                        </div>

                        <div class="col-lg-3 col-xxl-4 ms-3">
                            <h3 class="mt-5 mb-3 ">Support</h3>
                            <a href="#" class="text-light text-decoration-none">
                                <p>Help Center</p>
                            </a>
                            <a href="#" class="text-light text-decoration-none">
                                <p></p>
                            </a>
                        </div>

                        <div class="col-lg-3 col-xxl-4 ms-3">
                            <h3 class="mt-5 mb-3">Legal</h3>
                            <a href="#" class="text-light text-decoration-none">
                                <p>Cookies Policy</p>
                            </a>
                            <a href="#" class="text-light text-decoration-none">
                                <p>Privacy Policy</p>
                            </a>
                            <a href="#" class="text-light text-decoration-none">
                                <p>Terms & Condition</p>
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div class="social-links">
                        <div class="copyright mb-3 ms-3">
                            &copy; Copyright 2024 <strong><span>Skill Harvest </span></strong>. All Rights Reserved <i class="bi bi-innstagram"></i>
                        </div>
                        <div class="lg-ms-3 ms-3">
                            <a href="#" target="_blank" class="youtube"><i class="bi bi-youtube text-light h4 me-3"></i></a>
                            <a href="#" target="_blank" class="facebook"><i class="bi bi-facebook text-light h4 me-3 "></i></a>
                            <a href="#" target="_blank" class="instagram"><i class="bi bi-instagram text-light h4 me-3"></i></a>
                            <a href="#" target="_blank" class="linkedin"><i class="bi bi-linkedin text-light h4 me-3"></i></a>
                        </div>
                    </div>
                </section>
            </footer>

            <div id="preloader">
                <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                    class="bi bi-arrow-up-short"></i></a>
            </div>
        </div>
    )
}

export default Footer
