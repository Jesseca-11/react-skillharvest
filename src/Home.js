import myImage1 from './images/myImage1.jpg';
import myDesign2 from './images/myDesign2.jpg';
import myDev1 from './images/myDev1.jpg';
import myAnalytics from './images/myAnalytics.jpg';
import { useEffect, useState } from 'react';





function Home() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [fnum, setFnum] = useState('');



    // const [datas, setDatas] = useState([
    //     { fname: "Jessica", lname: "John", Email: "john@gmail.com", fnum: "borrow",id: 1}, 
    //     { fname: "Delphine", lname: "Peter", Email: "peter@gmail.com", fnum: "borrow", id: 2},
    //     { fname: "Charles", lname: "Joseph", Email: "josephn@gmail.com", fnum: "borrow", id: 3} 
    // ]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { fname, lname, email, fnum };

        fetch('http://localhost:8001/datas', {
            method: 'POST',
            header: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('New data Added');
        })
    }

    // const datas= [datas, setDatas] = useState();

    useEffect(() => {
        setTimeout(() => {
          fetch('http://localhost:8001/datas')
          .then(res => {
            return res.json();
          })
        //   .then(data => {
        //     setFname(data);
        //     setLname(data);
        //     setEmail(data);
        //     setFnum(data);
        //   })
        })
    }, []);




    return (
        <>

            <div className="container-fluid hitext ">
                <div className="row mb-5 ps-3">
                    <div className="col-sm-6 col-lg-6 col-xxl-6 text-light title">
                        <h1>Better Solutions <span className="text-info">For Your Business </span></h1>
                        <p className="lead">We are team of talented designers making website with Passion</p>
                        <button className="btn btn-primary get ps-4 pe-4 text-light" data-bs-toggle="modal"
                            data-bs-target="#started">Get Started</button>
                        <a href="#" className="ps-1 text-light text-decoration-none"><i
                            className="bi bi-play-circle pe-1 ps-2 text-light fa-sm h4"></i>Watch Video</a>
                    </div>
                    <div className="col-sm-5 col-lg-5 col-xxl-5 mb-5" id="image">
                        <img src={myImage1} alt="" className="img img-fluid " />
                    </div>
                </div>
            </div>

            <div className="container-lg " id="about">
                <div className="section-title my-2">
                    <h1>About</h1>
                </div>
                <p className="lead text-center mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                    voluptatem molestiae maiores perferendis possimus est.</p>
                <div className="row rest">
                    <div className="col-sm-12 col-lg-4 col-xxl-4 text-center">
                        <i className="bi bi-window h2 text-primary ms-4 " id="window"></i>
                        <h4 className="ps-4">Fully Responsive</h4>
                        <p>This theme will look great on any device,no matter the size!</p>
                    </div>

                    <div className="col-sm-12 col-lg-4 col-xxl-4  text-center">
                        <i className="bi bi-layers h2 text-primary ms-4 " id="window"></i>
                        <h4 className="ps-4">Bootstrap 5 Ready</h4>
                        <p className="text-center">Featuring the latest build of the new Bootstrap 5 Framwork!</p>
                    </div>

                    <div className="col-sm-12 col-lg-4 col-xxl-4 text-center">
                        <i className="bi bi-terminal h2 text-primary text-center ms-4 " id="window"></i>
                        <h4 className="ps-4 ">Easy to use</h4>
                        <p className="text-center">Ready to use with your own content or customize the source files!</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid services" id="services">
                <div className="section-title my-2">
                    <h1>Our Services</h1>
                </div>
                <p className="lead text-center mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
                    dignissimos doloremque ipsam? Fugit, placeat odio?</p>

                <div className="row mb-3">
                    <div className="col-sm-12 col-lg-4  col-xxl-3">
                        <div className="card">
                            <img src={myDesign2} alt="design" className="card-img-top" />
                            <div className="card-body">
                                <h4 className="card-title text-center">Design</h4>
                                <p className="card-text">Deliver the best user experience with our carefully designed responsive
                                    websites and application!</p>
                            </div>
                            <div className="card-footer text-body-secondary text-center">
                                <button className="btn btn-outline border-danger text-danger">See portfolio <i
                                    className="bi bi-arrow-right-short"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-4  col-xxl-3">
                        <div className="card">
                            <img src={myDev1} alt="design" className="card-img-top  " />
                            <div className="card-body">
                                <h4 className="card-title text-center" id="card-t">Development</h4>
                                <p className="card-text">You need software that works on every device. Leverange the latest
                                    business technologies!</p>
                            </div>
                            <div className="card-footer text-body-secondary text-center">
                                <button className="btn btn-outline border-danger text-danger ">See project<i
                                    className="bi bi-arrow-right-short"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-4  col-xxl-3">
                        <div className="card">
                            <img src={myAnalytics} alt="design" className="card-img-top" />
                            <div className="card-body">
                                <h4 className="card-title text-center">Analytics</h4>
                                <p className="card-text">Consult our experts to set up proper goals and find the best stack for
                                    your next software application!</p>
                            </div>
                            <div className="card-footer text-body-secondary text-center">
                                <button className="btn btn-outline border-danger text-danger ">See testimonials <i
                                    className="bi bi-arrow-right-short"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="pricing" className="p-4 bg-secondary">
                <div className="container">
                    <h1 className="text-center text-white">Our Pricing</h1>
                    <p className="lead text-center text-white mb-5">Below are the details of our courses and their prices,feel free to select your preffered options.</p>

                    <div className="row g-3 text-align-center justify-content-around">
                        <div className="col-xs-4 col-sm-4 col-lg-3 shadow-lg price ">
                            <div id="" className="pricing-card text-light ">
                                <h3 className="pt-3">Software Development</h3>
                                <p className="pb-1">Which includes HTML,CSS,Bootstrap, React, C#, MySQL & .NET.
                                    Bonus courseGithub </p>
                                <p className="lead fw-bold ">$25.99/year</p>
                                <button className="btn btn-info rounded-pill mb-3">Add To Cart</button>
                            </div>
                        </div>

                        <div className="col-xs-4 col-sm-3 col-lg-3 ms-1 shadow-lg price">
                            <div id="" className="pricing-card text-light ">
                                <h3 className="pt-3">UI/UX Design</h3>
                                <p>Which includes learning  to use figma  efficiently and accurately,Adobe XD,Adobe Illustrator, Protopie,
                                    Testing Etc. </p>
                                <p className="lead fw-bold  ">$15.99/year</p>
                                <button className="btn btn-info rounded-pill mb-3">Add To Cart</button>
                            </div>
                        </div>

                        <div className="col-sm-3 col-lg-4 ms-1 shadow-lg price">
                            <div id="" className="pricing-card text-light ">
                                <h3 className="pt-3">Cloud Computing </h3>
                                <p>which includes Amazon web services(AWS), Microsoft Azure, Docker & Kubernetes</p>
                                <p className="lead fw-bold ">$40.99/year</p>
                                <button className="btn btn-info rounded-pill mb-3">Add To Cart</button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


            <div className="container contact mt-5" data-aos="fade-up" id="contact">

                <div className="section-title ">
                    <h1>Contact</h1>
                </div>

                <div className="row mt-1">

                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>36, Maschester town, Los vegas, NewYork</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <a href="mailto:john@gmail.com">
                                    <p>john@gmail.com</p>
                                </a>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <a href="tel:+243 808 281 6496">
                                    <p>+243 808 281 6496</p>
                                </a>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0">

                        <form>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name"
                                        placeholder="Your Name" required />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email"
                                        placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject"
                                    placeholder="Subject" required />
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message"
                                    required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit"
                                className="btn btn-primary mb-3 rounded-pill">Send Message</button></div>
                        </form>

                    </div>

                </div>

            </div>


            <div className="modal fade" id="started" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">ENROLLMENT FORM</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="lead">Fill out the form and we will get back to you</p>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label for="first-name" className="col-form-label">First Name</label>
                                    <input type="text" className="form-control" id="first-name" placeholder="Enter first name" value={fname} onChange={(e) => setFname(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label for="last-name" className="col-form-label">Last Name</label>
                                    <input type="text" className="form-control" id="last-name" placeholder="Enter last name" value={lname} onChange={(e) => setLname(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="col-form-label">Email</label>
                                    <input type="text" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label for="number" className="col-form-label">Phone Number</label>
                                    <input type="text" className="form-control" id="number" placeholder="Enter phone number" value={fnum} onChange={(e) => setFnum(e.target.value)} />
                                </div>


                                <div className="modal-footer">
                                    <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button className="btn btn-primary" >Submit</button>
                                
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>

            {/* <div> <Forms datas={datas} />  </div> */}


        </>



    )
};

export default Home;
