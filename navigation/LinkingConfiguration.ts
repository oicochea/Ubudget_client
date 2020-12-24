import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
        TabExpenses: {
          screens: {
            TabExpensesScreen: 'expenses',
          },
        },
      },
      NotFound: '*',
    },
  },
};
