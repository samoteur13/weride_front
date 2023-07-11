import React from 'react';
import {useSelector} from 'react-redux';
import {NavBarDisconect} from './NavBar/NavBarDisconect';
import {NavBarConnect} from './NavBar/NavBarConnect';
import {AuthService} from '../services/AuthService';
import {fetchUserProfile} from '../services/ProfilService';

const Header = (props: any) => {
  AuthService();
  fetchUserProfile();

  const tokenStore = useSelector((state: any) => state.token.value);

  return (
    <>
      {tokenStore ? (
        <NavBarConnect actionProfil={props.actionProfil} />
      ) : (
        <NavBarDisconect
          actionResetPage={props.actionResetPage}
          actionConnexion={props.actionConnexion}
          actionInscription={props.actionInscription}
        />
      )}
    </>
  );
};

export default Header;
