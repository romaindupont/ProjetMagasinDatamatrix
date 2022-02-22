import { connect } from 'react-redux';
import ButtonValidate from 'components/Planning/FlashControl/ButtonValidate';
import { saveDbAi, addCounterPalet, deleteFlashList } from 'actions/flash';

const mapStateToProps = (state, ownProps) => ({
  flashList: state.flash.flashList,
  id: state.commande.id,
  paletCounter: state.flash.paletCounter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveDbAi: (
    id: number,
    qDelivery: number,
    paletNumber: string,
    list: any[]
  ) => {
    dispatch(saveDbAi(id, qDelivery, paletNumber, list));
  },
  addCounterPalet: () => {
    dispatch(addCounterPalet());
  },
  deleteFlashList: () => {
    dispatch(deleteFlashList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonValidate);
