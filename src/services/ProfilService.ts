import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { resetProfil, addProfil } from "../redux/slice/profilSlice/profilSlice";

export const fetchUserProfile = () => {
  const dispatch = useDispatch();
  const [send, setSend] = useState(false);
  const tokenStore = useSelector((state : any) => state.token.value);
  const getUser = useFetchData({
    url: 'api/profil',
    method: 'GET',
    token: tokenStore,
    send: send,
  });

  useEffect(() => {
    tokenStore && setSend(true);
  }, [tokenStore]);

  useEffect(() => {
    if (getUser.isLoading) {
      resetProfil();
      dispatch(addProfil({...getUser.apiData}));
      setSend(false);
    }
  }, [getUser.isLoading]);
};
