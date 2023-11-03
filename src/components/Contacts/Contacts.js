import PropTypes from "prop-types";
import s from './Contacts.module.css'

const Contacts = ({ contactList, filterValue, deleteClick}) => {
    return (
        <ul className={s.list}>
            {contactList.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()))
                .map(contact => {
                const { name, number, id } = contact;
               return (<li key={id} className={s.listItem}>
                   <p>{name}: <span>{number}</span></p>
                   <button className={s.button} id={id} onClick={deleteClick} type="button">Delete</button>
                </li>)
                
            }
         
            )}
        </ul>
    )
}

export default Contacts;

Contacts.propTypes = {
    contactList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string
    })),
    filterValue: PropTypes.string,
    deleteClick: PropTypes.func
}