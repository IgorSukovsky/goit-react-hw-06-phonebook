import { Component } from "react";
// import { v4 as uuid } from "uuid";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactList/ContactList";
import styles from "./Contacts.module.css";

import { connect } from "react-redux";
import {
  addNewContacts,
  getAllContacts,
} from "../redux/contacts/contacts.operations";
import { getFormatFilterSelector } from "../redux/contacts/contactsSelector";

class Contacts extends Component {
  state = {
    items: [],
    filter: "",
  };

  handleSubmit = (term) => {
    if (!term) {
      alert("Поле не может быть пустым!");
      return;
    }

    const isDuplicate = this.state.items.some(
      (item) => item.name === term.name
    );
    if (isDuplicate) {
      alert("Контакт: " + term.name + " уже существует ");
      return;
    }

    const newContacts = {
      // id: uuid(),
      name: term.name,
      number: term.number,
    };
    this.props.addNewContacts(newContacts);
  };

  render() {
    const { items, filter } = this.props;

    return (
      <div className="container">
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2 className={styles.titleContact}>Contacts</h2>
        <div className={styles.block}>
          <Filter filter={filter} handleChange={this.props.handleChange} />
          <ContactsList items={items} handleDelete={this.props.handleDelete} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: getFormatFilterSelector(state),
    filter: state.filter,
  };
};

const mapDispatch = {
  addNewContacts,
  getAllContacts,
};

export default connect(mapStateToProps, mapDispatch)(Contacts);
