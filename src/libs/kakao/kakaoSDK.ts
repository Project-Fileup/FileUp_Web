const kakaoSDK = {
  init: (key: string): void => {
    (window as any)?.Kakao.init(key);
  },

  isInitialized: (): boolean => {
    return (window as any)?.Kakao.isInitialized();
  },

  authorize: (redirectUri: string): void => {
    (window as any)?.Kakao.Auth.authorize({
      redirectUri,
    });
  },
};

export default kakaoSDK;