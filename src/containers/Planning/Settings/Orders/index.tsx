import { connect } from 'react-redux';
import Orders from 'components/Settings/Orders';
import { ordersList, updateLineOrder } from 'actions/commande';

const mapStateToProps = (state, ownProps) => ({
  listCommande: state.commande.listCommande,
  listOfOrders: state.commande.listOfOrders,
  selectList: state.commande.selectList,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  ordersList: () => {
    dispatch(ordersList());
  },
  updateLineOrder: (
    id: number,
    reference: string,
    customRef: string,
    quantity: number,
    deliveryQuantity: number,
    dateNeed: string,
    numeroCde: string
  ) => {
    dispatch(
      updateLineOrder(
        id,
        reference,
        customRef,
        quantity,
        deliveryQuantity,
        dateNeed,
        numeroCde
    ));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
