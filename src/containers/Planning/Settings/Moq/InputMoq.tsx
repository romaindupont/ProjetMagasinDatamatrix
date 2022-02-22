import { connect } from 'react-redux';
import InputMoq from 'components/Settings/Moq/InputMoq';
import { changeValue } from 'actions/moq';

const mapStateToProps = (state, ownProps) => ({
  currentValue: state.moq[ownProps.name],
  id: state.moq.id,
  reference: state.moq.reference,
  moq: state.moq.moq,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeValue: (newValue: string) => {
    dispatch(changeValue(newValue, ownProps.name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputMoq);
