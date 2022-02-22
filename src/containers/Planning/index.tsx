import { connect } from 'react-redux';
import Planning from 'components/Planning';
import { dateFinder, saveIdDelivery } from '../../actions/commande';

const mapStateToProps = (state, ownProps) => ({
  listDelivery: state.commande.listDelivery,
  id: state.commande.id,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  dateFinder: (dateNeed: string) => {
    dispatch(dateFinder(dateNeed));
  },
  saveIdDelivery: (id: number) => {
    dispatch(saveIdDelivery(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Planning);
