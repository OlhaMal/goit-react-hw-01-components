import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead className={css.headerContainer}>
      <tr>
        <th className={css.tableHeader}>Type</th>
        <th className={css.tableHeader}>Amount</th>
        <th className={css.tableHeader}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr className={css.rowContainer} key={item.id}>
          <td className={css.rowValues}>{item.type}</td>
          <td className={css.rowValues}>{item.amount}</td>
          <td className={css.rowValues}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
