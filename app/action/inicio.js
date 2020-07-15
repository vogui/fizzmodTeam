import axios from "axios";

const getSessions = (sessions) => ({
  type: "GET_SESSIONS",
  sessions,
});

const headers = {
    headers:{
        'Content-Type': 'application/json',
        'janis-api-key' : 'Bearer',
        'janis-api-secret' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGRiZTg4NmNkYTk2OGVkYzMwMDgxOCIsImNsaWVudENvZGUiOiJwbGF0YWZvcm1hNS0yMDIwIiwiaXNEZXYiOmZhbHNlLCJleHAiOjE1OTUwMDEwOTYsImlhdCI6MTU5NDgyODI5Nn0.iMIiWM0axLUrZbnhcrbnbHhX_lBLO-gocavequcZw7Y',
        'janis-client': 'plataforma5-2020'
      }
}

export const fetchSessions = (token) => (dispatch) => {
  console.log('llegamos a este axios')
  return axios
    .get(`https://picking.janis.in/api/session/${token}`, headers)
    .then((list) => {
      console.log("SESSION LISTA DEVUELTA DE BACKEND: ", list)
      dispatch(getSessions(list))}
      );
};
