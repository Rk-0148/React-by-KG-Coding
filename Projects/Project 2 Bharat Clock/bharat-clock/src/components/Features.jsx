export default function Features() {
  return (
    <>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Key Features</h2>
        <div className="row g-4 py-3 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
            <h3 className="fs-2 text-body-emphasis">Real-Time Accuracy</h3>
            <p>Displays the current IST with precision.</p>
            <a href="#" className="icon-link">
              Call to action
            </a>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
            <h3 className="fs-2 text-body-emphasis">User-Friendly Design</h3>
            <p>Easy to read and navigate with a clean, modern interface.</p>
            <a href="#" className="icon-link">
              Call to action
            </a>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
            <h3 className="fs-2 text-body-emphasis">Global Access</h3>
            <p>
              Accessible from anywhere, ensuring you can always check the time
              in India
            </p>
            <a href="#" className="icon-link">
              Call to action
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
