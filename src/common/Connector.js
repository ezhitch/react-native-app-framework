import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};

export const connector = (UIComponent) => {
  return connect(mapStateToProps, mapDispatchToProps)(UIComponent);
};
