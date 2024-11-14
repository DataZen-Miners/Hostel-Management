import React from 'react'

export const HowItWorks = () => {
  const sectionStyle = {
    backgroundColor: '#1c1b23', // Dark background for section
    color: 'hsl(var(--text-primary))', // White text
  };
    return (
          <section style={sectionStyle} className="text-white py-5">
            <div className="container">
              <h2 className="display-2">How It Works</h2>
              <div className="row justify-content-center ">
                <div className="col-md-8">
                  <div className="accordion" id="howItWorks">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          1. Register an Account
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#howItWorks">
                        <div className="accordion-body">
                          Sign up for an account with your hostel details and personal information.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          2. Submit a Complaint
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#howItWorks">
                        <div className="accordion-body">
                          Fill out the complaint form with details about your issue and submit it through the platform.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          3. Track Progress
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#howItWorks">
                        <div className="accordion-body">
                          Monitor the status of your complaint and receive updates as it's being processed and resolved.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
    )
}