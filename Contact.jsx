/* eslint-disable react/prop-types */

function Contact(props) {
    return (
        <li>
            <span>{props.contact.name} - {props.contact.email}</span>
            <button onClick={() => props.deleteContact(props.contact.name)}>Delete</button>
        </li>
    );
}

export default Contact;
