import React from 'react';

const topBar = () => {
  return (
    <div className='top-bar pt-1 pb-1 text-light'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex pt-2 pb-2'>
          </div>
          <div className='d-flex pt-2 pb-2'>
            <div className='social-media d-flex align-item-center'>
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
  );
};

export default topBar;
