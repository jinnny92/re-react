import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export default function useAction(action, deps) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(action)) {
        return action.map((a) => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(action, dispatch);
    },
    deps ? [dispatch, ...deps] : deps,
  );
}
