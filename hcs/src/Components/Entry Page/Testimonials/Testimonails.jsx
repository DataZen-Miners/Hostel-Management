import React from 'react'

export const Testimonails = () => {
  const sectionStyle = {
    backgroundColor: '#1c1b23', // Dark background for section
    color: 'hsl(var(--text-primary))', // White text
  };
        return (
          <section style={sectionStyle} className="py-5 text-white">
            <div className="container">
              <h2 className="text-center mb-5">What Our Users Say</h2>
              <div className="row">
                <div className="col-lg-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <p className="card-text">"ComplainEase has made it so much easier to report and track issues in our hostel. Highly recommended!"</p>
                      <p className="font-weight-bold mb-0">- Sarah J., Student</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <p className="card-text">"As a hostel manager, this system has streamlined our complaint resolution process significantly."</p>
                      <p className="font-weight-bold mb-0">- Mark T., Hostel Manager</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <p className="card-text">"The real-time updates feature is fantastic. I always know the status of my complaints."</p>
                      <p className="font-weight-bold mb-0">- Emily R., Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}
