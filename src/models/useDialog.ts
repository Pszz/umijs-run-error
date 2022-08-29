import { useCallback, useState } from 'react';

type IDialogType = {
  key: string;
  payload?: any;
};

type IState = {
  [key: string]: IDialogType & { show: boolean };
};

export default () => {
  const [state, setState] = useState<IState>({});

  const show = useCallback(
    (key: string, payload?: any) => {
      setState({
        ...state,
        [key]: {
          key,
          show: true,
          payload,
        },
      });
    },
    [state],
  );

  const hiden = useCallback(
    (key: string, payload?: any) => {
      setState({
        ...state,
        [key]: {
          key,
          show: false,
          payload,
        },
      });
    },
    [state],
  );

  return { show, hiden, state };
};
