import { useContext } from 'react';
import TimeContext from './context';

const useTimeContext = () => {
  const context = useContext(TimeContext);

  return context;
};

export default useTimeContext;
