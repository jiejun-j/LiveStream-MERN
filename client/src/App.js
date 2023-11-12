import { Toaster } from 'react-hot-toast';

export const App = ({ children }) => {
  return <>
    {children}
    <Toaster position='bottom-right' reverseOrder={false} />
  </>;
};