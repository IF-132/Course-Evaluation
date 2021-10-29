import jwt_decode from 'jwt-decode';

//getting token from local storage
export function getToken() {
  let tempToken = localStorage.getItem('token');
  if (tempToken !== null) {
    return tempToken;
  } else return '';
}

//getting token id
export function getTokenId(): {} | undefined {
  let tempTokenData: { id: number } = jwt_decode(getToken());
  if (tempTokenData.id !== null) return tempTokenData.id;
  else return '';
}

//getting token role
export function getTokenRole(): [] | undefined {
  let tempTokenData: { role: [] } = jwt_decode(getToken());
  return tempTokenData.role;
}
