import commonType from './consts';

export const changeTheme = () => ({
  type: commonType.changeTheme,
});
export const startLoading = () => ({
  type: commonType.startLoading,
});
export const succeedLoading = () => ({
  type: commonType.succeedLoading,
});
export const failLoading = () => ({
  type: commonType.failLoading,
});
