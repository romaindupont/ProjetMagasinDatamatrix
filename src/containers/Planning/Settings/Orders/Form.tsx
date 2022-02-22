import { connect } from 'react-redux';
import Form from 'components/Settings/Orders/Form';
import { updateLineOrder, importBdd } from 'actions/commande';

const mapStateToProps = (state, ownProps) => ({
  id: state.commande.id,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
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
      )
    );
  },
  importBdd: (reference: string, quantity: number, dateNeed: string, numeroCde: string) => {
    dispatch(importBdd(reference, quantity, dateNeed, numeroCde));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
