import { useContext } from 'react';
import DateContext from './context';

const useDateContext = () => {
  const context = useContext(DateContext);

  return context;
};

export default useDateContext;
