interface ICommonReducer {
  noInternetError: string | undefined;
  language: string | undefined;
  isDarkMode: boolean;
  isError: boolean | null;
  errorMessage: string;
  SuccessMessage: string;
}

type RootStackParamList = {
  signInScreen: { name: string };
  homeScreen: undefined, // undefined because you aren't passing any params to the home screen => if you passing the parma then replace with { name: string }
  propertyAddScreen: undefined,
  addClientScreen: undefined,
  profileScreen: undefined
};

export type {
  ICommonReducer,
  RootStackParamList,
};
