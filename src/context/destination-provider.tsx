import {
  createContext, 
  useState,
  useContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect, 
} from "react";

import DestinationType from '../types/Destination';

type DestinationState = {
  newDestination?: DestinationType;
  setDestination: Dispatch<SetStateAction<DestinationType | undefined>>;
};

type DestinationProviderProps = {
  destination?: DestinationType;
  children: ReactNode;
};

export const DestinationContext = createContext({} as DestinationState);
export const useDestination = (): DestinationState => useContext(DestinationContext);

const DestinationProvider = ({
  children,
  destination
}: DestinationProviderProps): JSX.Element => {
  const [newDestination, setDestination] = useState(destination);

  useEffect(() => {
    localStorage.setItem('destination', JSON.stringify(newDestination));
  }, [newDestination]);
  
  return (
    <DestinationContext.Provider
      value={{
        newDestination,
        setDestination
      }}
    >
      {children}
    </DestinationContext.Provider>
  );
};

export default DestinationProvider;

