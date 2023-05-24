import PropTypes from 'prop-types';
import {
  Table,
  Table_th,
  Table_td,
  Table_tr,
} from 'components/TransactionHistory/TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Table_th>Type</Table_th>
          <Table_th>Amount</Table_th>
          <Table_th>Currency</Table_th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }, idx) => (
          <Table_tr key={id} index={idx}>
            <Table_td>{type}</Table_td>
            <Table_td>{amount}</Table_td>
            <Table_td>{currency}</Table_td>
          </Table_tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
