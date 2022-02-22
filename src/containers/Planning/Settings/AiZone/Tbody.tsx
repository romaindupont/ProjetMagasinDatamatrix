import { connect } from 'react-redux';
import Tbody from 'components/Settings/AiZone/Tbody';

const mapStateToProps = (state, ownProps) => ({
  aiList: state.ai.aiList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Tbody);
