import { initialState } from '../configs/InitialState';
import { phoneNumberReducer } from './PhoneNumberReducer';
import { authcodeReducer } from './AuthcodeReducer';
import { passwordReducer } from './PasswordReducer';
import { fetchAuthcodeReducer } from './FetchAuthcodeReducer';
import { fetchAuthcodeForResetPasswordReducer } from './FetchAuthcodeForResetPasswordReducer';
import { registerReducer } from './RegisterReducer';
import { loginReducer } from './LoginReducer';
import { resetPasswordReducer } from './ResetPasswordReducer';
import { logoutReducer } from './LogoutReducer';

export const userReducer = (state = initialState.user, action = {}) => {
		state = phoneNumberReducer(state, action);
		state = authcodeReducer(state, action);
		state = passwordReducer(state, action);
		state = fetchAuthcodeReducer(state, action);
		state = fetchAuthcodeForResetPasswordReducer(state, action);
		state = registerReducer(state, action);
		state = loginReducer(state, action);
		state = resetPasswordReducer(state, action);
    state = logoutReducer(state, action);
		return state;
};
