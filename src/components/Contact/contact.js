import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xnnnrvkz");
  if (state.succeeded) {
    return <p className="success-message">Ton message a été envoyé avec succès. Je te contacte dès que possible ! ✌️</p>;
  }

  return (
    <div className="contact-container">
      <section className="intro-section">
        <h1>Je serais ravie d'en savoir plus sur toi et ton projet</h1>
        <p>Que tu aies une question ou un commentaire, n'hésites pas à me contacter !</p>
      </section>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="firstName">Ton prénom</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          required
          aria-describedby="firstNameHelp"
        />
        <ValidationError 
          prefix="Prénom" 
          field="firstName"
          errors={state.errors}
        />

        <label htmlFor="lastName">Ton nom</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          required
          aria-describedby="lastNameHelp"
        />
        <ValidationError 
          prefix="Nom" 
          field="lastName"
          errors={state.errors}
        />
        
        <label htmlFor="phone">Ton numéro de téléphone</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          required
          aria-describedby="phoneHelp"
        />
        <ValidationError 
          prefix="Téléphone" 
          field="phone"
          errors={state.errors}
        />
        
        <label htmlFor="email">Ton adresse mail</label>
        <input
          id="email"
          type="email" 
          name="email"
          required
          aria-describedby="emailHelp"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />

        <label htmlFor="message">Ton message</label>
        <textarea
          id="message"
          name="message"
          required
          aria-describedby="messageHelp"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
          Envoyer
        </button>
      </form>
    </div>
  );
}

function App() {
  return <ContactForm />;
}

export default App;