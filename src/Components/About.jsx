import React, { startTransition } from 'react'

export default function About() {
  return (
    <section className="d-flex align-items-center bg-light vh-100 font-poppins text-dark">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="position-relative">
              <img
                src="https://i.postimg.cc/rF0MKfBV/pexels-andrea-piacquadio-3760263.jpg"
                alt="aboutimage"
                className="img-fluid rounded"
              />
              <div className="position-absolute bottom-0 end-0 z-index-10 p-3 bg-white border border-primary rounded shadow">
                <p className="h6 font-weight-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="position-absolute top-0 start-0 w-4 h-4 text-primary opacity-25"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                  </svg>{' '}
                  Successfully Providing business solutions from 25 years
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="border-start border-primary ps-4 mb-4">
              <span className="text-muted text-uppercase">Who we are?</span>
              <h1 className="mt-2 display-4 font-weight-bold text-dark">About Us</h1>
            </div>
            <p className="mb-4 text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet. labore et dolore magna aliqua. Ut enim ad minim
              veniam Lorem ipsum dolor sit amet. amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet.
            </p>
            <a
              href="#"
              className="btn btn-primary text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
