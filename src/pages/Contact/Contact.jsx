import "./Contact.scss";
import Particles from "../../components/Particles";
import ContactForm from "../../components/ContactForm/ContactForm";
import { NavLink } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

function Contact() {
  return (
    <div className="layout-contact">
      <div className="goBack-link">
        <NavLink to="/">
          <i className="fa-solid fa-circle-arrow-left fa-xl"></i>
        </NavLink>
      </div>
      <main className="contact-content">
        <h2 className="form-title">Formulaire de contact</h2>
        <section className="contact-section-1">
          <ContactForm />
        </section>
        <section className="contact-section-2">
          <h2 className="mail-title">M'envoyer directement un mail</h2>
          <a href="mailto:tanguystrub08@gmail.com" className="letter-image">
            <div className="animated-mail">
              <div className="back-fold"></div>
              <div className="letter">
                <div className="letter-border"></div>
                <div className="letter-title"></div>
                <div className="letter-context"></div>
                <div className="letter-stamp">
                  <div className="letter-stamp-inner"></div>
                </div>
              </div>
              <div className="top-fold"></div>
              <div className="body"></div>
              <div className="left-fold"></div>
            </div>
            <div className="shadow"></div>
          </a>
        </section>
      </main>
      <Loader />
      <Particles />
    </div>
  );
}

export default Contact;
