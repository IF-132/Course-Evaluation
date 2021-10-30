import jwt_decode from 'jwt-decode';

//getting token from local storage
export function getToken() {
  let tempToken = localStorage.getItem('token');
    //'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrYXRyeWNoMTIzNEBnbWFpbC5jb20iLCJyb2xlIjpbXSwiaWQiOjcwLCJhdXRoZW50aWNhdGVkIjp0cnVlLCJpYXQiOjE2MzU1OTkyNDgsImV4cCI6MTYzNTY4NTY0OH0.o6R8bTeqdDXQPhehCuzP8ZC2vNTQJgz5PglxhVqIEbw'; 
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
