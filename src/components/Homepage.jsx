import Footer from "./Footer";
import Header from "./Header";
import Register from "./Register";

function Homepage() {
  return (
    <div className="landing-page">
      <Header />
      <div className="landing-content">
        <div className="landing-text">
          <h1 className="heading">Welcome to Landmark Software Solutions</h1>
          <h2>Guides for filling the form</h2>

          <p>
            Please follow these guidelines to complete your registration accurately:
          </p>
          <ul>
            <li><strong>Personal Details:</strong> Provide your full legal name, valid email address, and active telephone number so we can reach you.</li>
            <li><strong>Academic Info:</strong> Accurately input your Specialty, School name, and your First Semester GPA.</li>
            <li><strong>Track Selection:</strong> Note that the only available track for this program is Software Developement. This selection is mandatory and cannot be changed.</li>
            <li><strong>Additional Info:</strong> Make use of the message box to provide any other relevant details or questions.</li>
            <li><strong>Review:</strong> Double-check all entered information before submitting to avoid errors in registration.</li>
          </ul>
        </div>
        <Register />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
