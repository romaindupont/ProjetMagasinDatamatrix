import { connect } from 'react-redux';
import TableCommande from 'components/ImportCde/TableCommande';
import { removeOrder } from '../../actions/commande';

const mapStateToProps = (state, ownProps) => ({
  listCommande: state.commande.listCommande,
});

const mapDispatchToProps = (dispatch) => ({
  removeOrder: () => {
    dispatch(removeOrder());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TableCommande);
