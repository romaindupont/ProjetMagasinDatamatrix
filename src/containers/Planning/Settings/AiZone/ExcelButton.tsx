import { connect } from 'react-redux';
import ExcelButton from 'components/Settings/AiZone/ExcelButton';

const mapStateToProps = (state, ownProps) => ({
  aiList: state.ai.aiList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ExcelButton);
