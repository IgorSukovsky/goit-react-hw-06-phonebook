import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeContacts } from "../../redux/contacts/contacts.operations";
import ContactsListItem from "../ContactListItem/ContactListItem";
import styles from "./ContactList.module.css";
import { getFilterContactsSelector } from "../../redux/contacts/contactsSelector";
const ContactsList = ({ items, handleDelete }) => {
  return (
    <>
      <ul className={styles.ul}>
        {items.map((item) => (
          <ContactsListItem
            key={item.id}
            item={item}
            handleDelete={() => handleDelete(item.id)}
          />
        ))}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    items: getFilterContactsSelector(state),
  };
};

const mapDispatchToProps = {
  handleDelete: removeContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
