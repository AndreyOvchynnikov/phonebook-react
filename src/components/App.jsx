import { Component } from "react";
import PhonebookForm from "./Form";
import Section from "./Section";
import Contacts from "./Contacts";
import Filter from "./Filter";

export class App extends Component {
  
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
}

  handleChange = (event) => {
    const { value, name } = event.currentTarget;
    this.setState({ [name]: value });
  }

  handleSubmit = (newContact) => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`)
      return
    }
    this.setState( prevState => ({ contacts: [newContact, ...prevState.contacts ]})) 
  }

  deleteClick = (event) => {
    this.setState( {
      contacts: this.state.contacts.filter(contact => contact.id !== event.currentTarget.id)
    })
  }
  
  render() {

    return (
      <>
        <Section title="Phonebook">
          <PhonebookForm onSubmit={this.handleSubmit}/>
        </Section>
        <Section title="Contacts">
        <Filter onChange={this.handleChange} filterValue={this.state.filter} /> 
          <Contacts
            contactList={this.state.contacts}
            filterValue={this.state.filter}
            deleteClick={this.deleteClick} />
        </Section>
        </>
    )
  }
};
