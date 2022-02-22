import { connect } from 'react-redux';
import InputOrder from 'components/Settings/Orders/InputOrder';
import { changeValueOrder } from 'actions/commande';

const mapStateToProps = (state, ownProps) => ({
  currentValue: state.commande[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeValueOrder: (newValue: string) => {
    dispatch(changeValueOrder(newValue, ownProps.name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputOrder);
