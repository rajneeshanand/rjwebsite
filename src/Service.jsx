import React from 'react';
import ReactDOM from 'react-dom';
import web1 from "../src/images/prt1.jpg";
import web2 from "../src/images/prt2.jpg";
import web3 from "../src/images/prt3.png";
import web4 from "../src/images/prt4.jpg";
import web5 from "../src/images/prt5.jpg";
import web6 from "../src/images/prt6.png";
import 'tachyons';

const Service=()=>{
    return(
        <>
        <div className="mt-5">
            <h1 className="text-center"> Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className='row'>
                <div className="col-10 mx-auto">
                    <div className="row gy-5">
                        <div className="col-md-4 col-10 mx-auto">
                        <div className="card grow  shadow-1" >
                        <img src={web1} class="card-img-top" style={{height: '15rem'}} alt="image"/>
                        <div className="card-body">
                            <h5 className="card-title">Photoshop</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Image Editing | UI/UX Design</h6>
                            <p className="card-text">Photoshop is Adobe's photo editing, image creation and graphic design software. The software provides many image editing features
                             for raster (pixel-based) images as well as vector graphics.It uses a layer-based editing system that enables image creation and other vector images.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                        </div>     
                        </div>

                        <div className="col-md-4 col-10 mx-auto">
                        <div className="card grow shadow-1" >
                        <img src={web2} class="card-img-top" style={{height: '15rem'}} alt="image"/>
                        <div className="card-body">
                            <h5 className="card-title">Machine Learning</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Data Analytics | ML Algorithm</h6>
                            <p className="card-text">Machine Learning can review large volumes of data and discover specific trends and patterns that would not be apparent to humans. For instance, 
                            for an e-commerce website like Amazon, it serves to understand the browsing behaviors and use their info. in their products.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="./contact.html" className="card-link">Another link</a>
                        </div>
                        </div>     
                        </div>

                        <div className="col-md-4 col-10 mx-auto">
                        <div className="card grow shadow-1" >
                        <img src={web3} class="card-img-top" style={{height: '15rem'}}alt="image"/>
                        <div className="card-body">
                            <h5 className="card-title">Web development </h5>
                            <h6 className="card-subtitle mb-2 text-muted">HTML| CSS | JS | PHP | MYSQL | REACT JS</h6>
                            <p className="card-text">Web design used to be focused on designing websites for desktop browsers; however, since the mid-2010s, design for mobile and tablet browsers has become 
                            ever-increasingly important. A web designer works on the appearance,layout,and,in some cases, content of a website.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                        </div>     
                        </div>

                        <div className="col-md-4 col-10 mx-auto">
                        <div className="card grow shadow-2" >
                        <img src={web4} class="card-img-top" style={{height: '15rem'}} alt="image"/>
                        <div className="card-body">
                            <h5 className="card-title">Python</h5>
                            <h6 className="card-subtitle mb-2 text-muted">GUI | DS/Algo Projects </h6>
                            <p className="card-text">GUI based desktop applications
                                        Image processing and graphic design applications
                                        Scientific and computational applications
                                        Games
                                        Web frameworks and web applications
                                        Enterprise and business applications
                                        Operating systems
                                        Language development
                                        Prototyping</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                        </div>     
                        </div>

                        <div className="col-md-4 col-10 mx-auto">
                        <div className="card grow shadow-2" >
                        <img src={web5} class="card-img-top" style={{height: '15rem'}} alt="image"/>
                        <div className="card-body">
                            <h5 className="card-title">Java</h5>
                            <h6 className="card-subtitle mb-2 text-muted">JAVA-CODE | DS/Algo</h6>
                            <p className="card-text">Java is known as one of the most-liked programming languages of our time. The language has been existing for two decades. Several specialists believe that
                             Java is one of the most effective programming languages ever created.It's one more advantages on Android.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                        </div>     
                        </div>

                        <div className="col-md-4 col-10 mx-auto">
                        <div className="card grow shadow-2" >
                        <img src={web6} class="card-img-top" style={{height: '15rem'}} alt="image"/>
                        <div className="card-body">
                            <h5 className="card-title">Mathematics</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Algebra Calculas | Trigonometry Numericals</h6>
                            <p className="card-text">Some students have a harder time than others with understanding math word problems. You can read these problems out loud, or even draw the problems out.
                             Hearing the problem or being able to visualize it can give you the help you need to improve this math skill.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                        </div>     
                        </div>

                        
                    </div>

                </div>
            </div>
        </div>
        </>

    );
}
export default Service;