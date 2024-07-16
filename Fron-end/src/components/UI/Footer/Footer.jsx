import React from 'react';


const footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className=''>
      <div className='container text-light pt-5'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-4 mb-5'>
            <div className='footer-title'>
              <h6>About App</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-muted'>
                Create a dashboard that compares the external debt stock and education expenditure for 
                five countries (Ethiopia, Djibouti, South Africa, Ghana and Tanzania) using a React js visualization trend chart.
                </small>
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-2 mb-5'>
          
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Contact Us</h6>
            </div>
            <div className='footer-content'>
              <p className='text-muted'>
              <i className='fas fa-map-marker-alt mr-2' />
                <small>Address : Addis Ababa, Ethiopia</small>
              </p>
              <p className='text-muted'>
              <i className='fas fa-envelope mr-2' />
               E-mail : fikalegesse@gmail.com 
              </p>
            
              <div className='social-media mt-4'>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='text-light'>
                  <i className='fab fa-facebook-f mr-4' />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className='text-light'>
                  <i className='fab fa-twitter mr-4' />
                </a> 
                <a href="https://www.linkedin.com/in/fikadu/" target="_blank" rel="noopener noreferrer" className='text-light'>
                <i className='fab fa-linkedin-in mr-4' />
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer pt-3 pb-3 text-center'>
        <small>Copyright © {currentYear} - Develop by Befikadu Legesse.</small>    &nbsp;&nbsp;&nbsp;&nbsp;
        Website: <a href="https://befikadu.000webhostapp.com" target="_blank" rel="noopener noreferrer" >
                https://befikadu.000webhostapp.com
             </a>
      </div>
    </footer>
  );
};

export default footer;
