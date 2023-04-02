import React, { Component } from 'react';
import { Form } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import { ContactList } from 'components/ContactList/ContactList';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };
  addContact = (name, number) => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            name,
            number,
            id: nanoid(),
          },
        ],
      };
    });
  };
  onChange = e => {
    this.setState({ filter: e.target.value });
  };
  render() {
    const { filter } = this.state;
    console.log(filter);
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    console.log(this.state.filter);
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onChange={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.onChange} filter={filter} />
        <ContactList visibleContacts={visibleContacts} />
      </div>
    );
  }
}
