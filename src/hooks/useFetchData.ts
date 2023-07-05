import {useState, useEffect} from 'react';
import {UseFetchDataInterface} from '../interfaces/useFetchData/useFetchDataInterface';
import {containsHtml} from '../utils/tools';
import {urlApi} from '../utils/Constants';
/*
Hook personaliser pour utiliser généraliser la méthode fetch
pour être lancer le paramtre send doit etre a true
*/
/**
 * Custom hook for fetching data from an API.
 *
 * @returns {Object} - Cette function se lance graçe a la varaible send qui est un bolean si elle passe a true envoie la requette , il faut refaire passer la variable a false pour pouvoir la réutiliser
 * @returns {Object} - verifier si la valeur est charger via la variable isLoading et une fois chargé enregistré les donné via la variable apiData
 * @returns {Object} - se servir de la variable messageData pour voir le retour de l'api
 */
export const useFetchData = ({
  url,
  method,
  token,
  dataSend,
  send,
}: UseFetchDataInterface) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState<any>([]);
  const [messageData, setMessageData] = useState<any>({
    error: true,
    title: '',
    message: {message: ''},
  });

  const headers: {[key: string]: string} = {
    'Content-Type': 'application/json',
  };
  //ajoute le token si existe au headers
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  useEffect(() => {
    console.log('je clique ' + send + url, method, dataSend);
    const fetchData = async () => {
      try {
        const requestOptions: any = {
          method: method,
          headers: headers,
        };

        // ajoute le body si existe
        if (dataSend && typeof dataSend === 'object') {
          for (const property in dataSend) {
            if (containsHtml(dataSend[property])) {
              return setMessageData({
                error: true,
                title: 'Erreur !',
                message: {
                  message:
                    'Attention, caractère non accepté dans le formulaire.',
                },
              });
            }
          }
          requestOptions.body = JSON.stringify(dataSend);
        }

        const response = await fetch(`${urlApi}${url}`, requestOptions);

        const data = await response.json();

        if (response.ok) {
          setMessageData({
            error: false,
            title: 'Succès',
            message: {
              message: data['message'],
            },
          });
          setApiData(data);
          setIsLoading(true);
        }
        if (!response.ok) {
          if (response.status === 422) {
            setMessageData({
              error: true,
              title: 'Erreur !',
              message: data['errors'],
            });
          } else {
            setMessageData({
              error: true,
              title: 'Erreur !',
              message: {
                message: data['message'],
              },
            });
          }
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setMessageData({
          error: true,
          title: 'Erreur !',
          message: {
            message: 'Problème de connexion',
          },
        });
        setIsLoading(false);
      }
    };
    if (send == true) {
      fetchData();
    }
  }, [send]);

  return {isLoading, apiData, messageData};
};
