import { connect } from 'react-redux';
import FlashControl from 'components/Planning/FlashControl';
import { addFlashReference, deleteFlashList, removeFlashList, selectFlashList } from 'actions/flash';

const mapStateToProps = (state, ownProps) => ({
  id: state.commande.id,
  listDelivery: state.commande.listDelivery,
  flashList: state.flash.flashList,
  idFlash: state.flash.idFlash,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addFlashReference: (reference: string, idFlash: number) => {
    dispatch(addFlashReference(reference, idFlash));
  },
  deleteFlashList: () => {
    dispatch(deleteFlashList());
  },
  removeFlashList: (idFlash: number) => {
    dispatch(removeFlashList(idFlash));
  },
  selectFlashList: (idFlash: number) => {
    dispatch(selectFlashList(idFlash));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashControl);
