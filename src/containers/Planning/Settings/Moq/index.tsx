import { connect } from 'react-redux';
import Moq from 'components/Settings/Moq';
import { dbMoqList, changeValue, saveSelectCase, addMoqInDb, updatedMoqInDb, deleteMoqInDb } from 'actions/moq';

const mapStateToProps = (state, ownProps) => ({
  moqList: state.moq.moqList,
  currentValue: state.moq[ownProps.name],
  id: state.moq.id,
  reference: state.moq.reference,
  moq: state.moq.moq,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  dbMoqList: () => {
    dispatch(dbMoqList());
  },
  changeValue: (newValue: string) => {
    dispatch(changeValue(newValue, ownProps.name));
  },
  saveSelectCase: (id: number, reference: string, moq: number) => {
    dispatch(saveSelectCase(id, reference, moq));
  },
  addMoqInDb: (reference: string, moq: number) => {
    dispatch(addMoqInDb(reference, moq));
  },
  updatedMoqInDb: (id: number, reference: string, moq: number) => {
    dispatch(updatedMoqInDb(id, reference, moq));
  },
  deleteMoqInDb: (id: number) => {
    dispatch(deleteMoqInDb(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Moq);
