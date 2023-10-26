import { createContext } from 'react';

export const APIContext = createContext();
const ContextProvider = (props) => {
  const carApiKey = "kbzi2mdWnynhC7xjtT/ewg==9Z5qhNJcLbgnQ9el";
  const carApi = 'https://api.api-ninjas.com/v1/cars?limit=10&model=';

  const personApi = 'https://random-data-api.com/api/v2/users?size=1&response_type=json';
  
  return (
    <APIContext.Provider
      value={{
        carApi,
        carApiKey,
        personApi,
      }}
    >
      {props.children}
    </APIContext.Provider>
  );
};
export default ContextProvider;