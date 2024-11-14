import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter signup logic here
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  const sectionStyle = {
    backgroundColor: '#1c1b23', // Dark background for section
    color: 'hsl(var(--text-primary))', // White text
  };

  return (
    <section style={sectionStyle} className="py-5 text-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h2 className="mb-4">Stay Updated</h2>
            <p className="mb-4">Subscribe to our newsletter for the latest updates and features.</p>
            <form onSubmit={handleSubmit} className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="btn btn-primary" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}