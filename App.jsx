import { useEffect, useState } from 'react';
import './App.css';
import ContactList from './ContactList';

function App() {
  let [contacts, setContacts] = useState([]);
  let [name, setName] = useState("xyz");
  let [email, setEmail] = useState("xyz@gmail.com");
  let [message, setMessage] = useState("Please Provide Information");

  // UseEffect used here.
  useEffect(() => {
    let initialContacts = [
      {
        name: "abc", email: "abc@gmail.com"
      },
      {
        name: "pqr", email: "pqr@gmail.com"
      }
    ];

    setContacts(initialContacts);
  }, []); // Dependency array that means this runs once when components rerender
  
  const addContact = () => {
    if (name && email) {
      const newContact = { name, email };
      setContacts([...contacts, newContact]);
      setName('');
      setEmail('');
      setMessage('Contact added successfully!');
    } else {
      setMessage('Please provide both name and email.');
    }
  };

  return (
    <div className="App">
      <h1>Contact List App</h1>
      <div className="input-container">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button onClick={addContact}>Add Contact</button>
      </div>
      {message && <p className="message">{message}</p>}
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
}

export default App;
