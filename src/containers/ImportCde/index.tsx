import { connect } from 'react-redux';
import ImportCde from '../../components/ImportCde';
import { importCommande, removeOrder, verifyCode, importBdd } from '../../actions/commande';

const mapStateToProps = (state: any) => ({
  listCommande: state.commande.listCommande,
  cssStyle: state.commande.listStyle
});

const mapDispatchToProps = (dispatch: any) => ({
  importCommande: (ordersPath: string) => {
    dispatch(importCommande(ordersPath));
  },
  removeOrder: () => {
    dispatch(removeOrder());
  },
  verifyCode: (reference: string) => {
    dispatch(verifyCode(reference));
  },
  importBdd: (reference: string, quantity: number, dateNeed: string, numeroCde: string) => {
    dispatch(importBdd(reference, quantity, dateNeed, numeroCde));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ImportCde);
