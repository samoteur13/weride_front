import React from 'react';
import { useSelector} from 'react-redux';
import { NavBarDisconect } from '../components/layout/NavBarDisconect';
import { NavBarConnect } from '../components/layout/NavBarConnect';
import { useConnect } from '../services/useConnect';


const Header = props => {
  useConnect()

  const tokenStore = useSelector((state) => state.token.value)

  return (
    <>
      {tokenStore ? 
        <NavBarConnect/>
        :
        <NavBarDisconect
          actionResetPage={props.actionResetPage}
          actionConnexion={props.actionConnexion}
          actionInscription={props.actionInscription}
        />
      }
    </>
  );
};

export default Header;
