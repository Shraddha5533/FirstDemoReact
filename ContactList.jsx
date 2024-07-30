/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import Contact from "./Contact";

function ContactList(props) {  // Using props instead of destructuring
    let deleteContact = (name) => {
        props.setContacts(props.contacts.filter(contact => contact.name !== name));
    };

    return (
        <div>
            <ul>
                {
                    props.contacts.length === 0 ?
                    (
                        <h1>There is no Contact available</h1>
                    ) :
                    (
                        props.contacts.map((contact, index) => (
                            <Contact key={index} contact={contact} deleteContact={deleteContact}/>
                        ))
                    )
                }
            </ul>
        </div>
    );
}

export default ContactList;
