import { StyleSheet, Dimensions } from 'react-native';
import { CONSTANT } from '../constants/Constant';

export const BasicStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
	backgroundImage: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},
	screenView: {
		marginLeft: 10,
		marginRight: 10
	},
	center: {
		alignItems: 'center'
	},
	blockButton: {
		marginTop: 30,
		backgroundColor: CONSTANT.BASIC_COLOR
	},
	buttonBasicColor: {
		backgroundColor: CONSTANT.BASIC_COLOR
	},
	line: {
		marginTop: 30,
		marginLeft: 30,
		marginRight: 30
	},
	fontSize: {
		fontSize: 12
	},
	appLogo: {
		marginTop: 60,
		width: 100,
		height: 100
	},
	appName: {
		marginTop: 10,
		color: CONSTANT.BASIC_COLOR,
		fontSize: 24
	},
	userLogo: {
		marginTop: 60,
		width: 80,
		height: 80
	},
	iconLayout: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: 15
	},
	buttonJustify: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	direction: {
		flexDirection: 'row'
	},
	layout: {
		flex: 1
	},
});
