import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { getContactsListItemSelector } from "../../redux/contacts/contactsSelector";
import styles from "./ContactListItem.module.css";
const ContactsListItem = ({ item, handleDelete }) => {
  const { name, number } = item;

  return (
    <li>
      <div className={styles.textContent}>
        <span>
          {name}: {number}
        </span>
        <button className={styles.btn} onClick={handleDelete}>
          X
        </button>
      </div>
    </li>
  );
};

ContactsListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactsListItem;

// ContactsListItem.propTypes = {
//   items: PropTypes.array.isRequired,
// };

// const mapStateToProps = (state) => {
//   return {
//     items: getContactsListItemSelector(state),
//   };
// };

// const MapDispatchToProps = {
//   handleDelete: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, MapDispatchToProps)(ContactsListItem);
