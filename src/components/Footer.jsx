import '../styles/Footer.css'

function Footer() {
    return (
        <div className="container-fluid p-5 bg-dark text-white footer">
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col-12 col-md-6 fs-6 d-flex justify-content-start align-items-center">Copyright © 2022 Oliver Linares Colinas</div>
                <div className="col-12 col-md-6 fs-7 d-flex justify-content-end justify-content-xl-center align-items-center">
                    <div>
                        Contact me:<br />
                        + Discord: Oliver Dismal #7807<br />
                        + Gmail: <a href="mailto:oliver.linarescolinas@gmail.com">oliver.linarescolinas@gmail.com</a><br />
                        + LinkedIn: <a href="https://www.linkedin.com/in/oliver-linares-colinas-a50353222/">Oliver Linares Colinas</a><br />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;