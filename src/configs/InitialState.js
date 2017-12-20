export const initialState = {
  nav: {
    index: 0,
    routes: [
      {
        index: 0,
        key: 'Init-id-1512809583617-2',
        routeName: 'Entrance',
        routes: [
          {
            key: 'HomeScreen',
            routeName: 'HomeScreen'
          },
          {
            key: 'FavoritesScreen',
            routeName: 'FavoritesScreen'
          },
          {
            key: 'StoryScreen',
            routeName: 'StoryScreen'
          },
          {
            key: 'OrderScreen',
            routeName: 'OrderScreen'
          },
          {
            key: 'MeScreen',
            routeName: 'MeScreen'
          }
        ]
      }
    ]
  },
  user: {
    phoneNumber: '',
    authcode: '',
    password: '',
    isFetching: false,
    isRegistered: false,
    isLogined: false,
    token: ''
  },
};
