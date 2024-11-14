import React from 'react'

export const Features = () => {
  const sectionStyle = {
    backgroundColor: '#1c1b23', // Dark background for section
    color: 'hsl(var(--text-primary))', // White text
  };

  return (
    <section style={sectionStyle} className="text-white py-5">
      <div className="container">
        <h2 className="display-3">Why Choose Us?</h2>
        <div className="row my-5">
          <div className="col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h3 className="display-6">Easy Submission</h3>
                <p className="card-text">Submit complaints quickly and easily through our user-friendly interface.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h3 className="display-6">Real-time Updates</h3>
                <p className="card-text">Stay informed with real-time status updates on your submitted complaints.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h3 className="display-6">Analytics Dashboard</h3>
                <p className="card-text">Access comprehensive analytics to track and improve complaint resolution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Features;
