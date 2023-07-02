import React from 'react';
import { useSelector} from 'react-redux';
import { NavBarDisconect } from './NavBar/NavBarDisconect';
import { NavBarConnect } from './NavBar/NavBarConnect';
import { useConnect } from '../services/AuthService';


const Header = (props: any) => {
  useConnect()

  const tokenStore = useSelector((state: any) => state.token.value)

  return (
    <>
      {tokenStore ? 
        <NavBarConnect
          actionProfil={props.actionProfil}
        />
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
