import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

/*
  1. Create the config
*/
export const toastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: (props: any) => (
    <BaseToast
      {...props}
      text1NumberOfLines={30}
      style={{
        borderLeftColor: '#69C779',
        height: 'auto',
        flex: 1,
        paddingVertical: 15,
        backgroundColor: '#44404A',
      }}
      contentContainerStyle={{flex: 1}}
      text1Style={{color: '#ffff'}}
    />
  ),

  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: '#FE6301',
        height: 'auto',
        flex: 1,
        paddingVertical: 15,
        backgroundColor: '#44404A',
      }}
      contentContainerStyle={{flex: 1}}
      text1Style={{color: '#ffff'}}
      text1NumberOfLines={30}
    />
  ),
};

export const toastSuccessComponent = (msg: string = 'Success') => {
  if (msg && msg.length > 0) {
    Toast.show({
      type: 'success',
      text1: msg,
      position: 'top',
    });
  }
};

export const toastErrorComponent = (msg: string = 'Error') => {
  if (msg && msg.length > 0) {
    console.log('Error message ', msg);
    Toast.show({
      type: 'error',
      text1: msg,
      position: 'top',
    });
  }
};
