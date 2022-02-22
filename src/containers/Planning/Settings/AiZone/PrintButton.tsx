import { connect } from 'react-redux';
import PrintButton from 'components/Settings/AiZone/PrintButton';

const mapStateToProps = (state, ownProps) => ({
  aiList: state.ai.aiList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrintButton);
