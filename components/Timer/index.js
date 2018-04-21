import { connect } from 'react-redux';
import Timer from './presenter';

function mapStateToProps(state){
  const { isPlaying, elapsedTime, counterDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    counterDuration
  }
}

export default connect(mapStateToProps)(Timer);
