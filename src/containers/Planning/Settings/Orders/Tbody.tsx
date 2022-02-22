import { connect } from 'react-redux';
import Tbody from 'components/Settings/Orders/Tbody';
import { selectLine } from 'actions/commande';

const mapStateToProps = (state, ownProps) => ({
  listOfOrders: state.commande.listOfOrders,
  selectList: state.commande.selectList,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  selectLine: (
    id: number,
    reference: string,
    customRef: string,
    quantity: number,
    deliveryQuantity: number,
    dateNeed: string,
    numeroCde: string
  ) => {
    dispatch(
      selectLine(
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

export default connect(mapStateToProps, mapDispatchToProps)(Tbody);
