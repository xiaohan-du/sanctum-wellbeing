  export const redirectTo = (url: string, isNewTab: boolean): void => {
    isNewTab ? window.open(url, '_blank') : window.location.href = url;    
  };
  