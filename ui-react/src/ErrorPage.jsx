import React from 'react';

const Error404Page = () => {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Load page */}
      <div className="animationload">
        <div className="loader"></div>
      </div>
      {/* End load page */}

      {/* Content Wrapper */}
      <div id="wrapper">
        <div className="container">
          {/* Light version */}
          <div id="light" className="row text-center">
            {/* Info */}
            <div className="info">
              <img src="//pkfrom.github.io/404/assets/img/404-light.gif" alt="404 error" style={{ marginBottom: '20px' }} />
              {/* end Rabbit */}
              <p style={{ color: 'white' }}>The page you are looking for was moved, removed,<br />
                renamed, or might never have existed.</p>
              <a href="/" className="btn" style={{ backgroundColor: '#ff9500', color: 'black' }}>Go Home</a>
            </div>
            {/* end Info */}
          </div>
          {/* End Light version */}

        </div>
        {/* end container */}
      </div>
      {/* end Content Wrapper */}
    </div>
  );
};

export default Error404Page;
