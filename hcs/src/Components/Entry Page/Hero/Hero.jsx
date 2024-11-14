import { Link } from 'react-router-dom';

export default function Hero() {
  const heroStyle = {
    backgroundColor: '#1c1b23', // Use the new dark color for background
    color: '#fff', // Use the text-primary color for text (white)
  };

  const buttonStyle = {
    backgroundColor: '#fff', // Use the same dark color for the button
    color: '#fff', // White text for the button
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
  };

  return (
    <header style={heroStyle} className="text-center py-5">
      <div className="container px-4">
        <h1 className="display-4">Streamline Your Complaints</h1>
        <p className="lead mb-4">Efficient complaint management for hostels and dormitories</p>
        <Link 
          to="/sign-up" 
          className="btn btn-light text-dark btn-lg"
          style={buttonStyle}
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
