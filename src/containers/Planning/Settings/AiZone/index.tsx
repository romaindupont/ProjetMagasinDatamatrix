import { connect } from 'react-redux';
import AiZone from 'components/Settings/AiZone';
import { dbAiList } from 'actions/ai';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch, ownProps) => ({
  dbAiList: () => {
    dispatch(dbAiList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AiZone);
