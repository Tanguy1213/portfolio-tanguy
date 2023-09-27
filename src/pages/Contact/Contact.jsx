import "./Contact.scss";
import Particles from "../../components/Particles";
import ContactForm from "../../components/ContactForm/ContactForm";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <div className="layout-contact">
      <div className="goBack-link">
        <NavLink to="/">
          <i className="fa-solid fa-left-long fa-2xl"></i>
        </NavLink>
      </div>
      <main className="contact-content">
      <h1 className="form-title">Formulaire de contact</h1>
        <section className="contact-section">
            
          <ContactForm />
        </section>
      </main>
      <Particles />
    </div>
  );
}

export default Contact;
