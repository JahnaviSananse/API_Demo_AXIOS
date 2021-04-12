import ProcessType from './Post.types';
const axios = require('axios');

export const ProcessStart = () => ({
  type: ProcessType.PROCESS_START,
});

export const ProcessSuccess = data => ({
  type: ProcessType.PROCESS_SUCCESS,
  payload: data,
});

export const ProcessStop = error => ({
  type: ProcessType.PROCESS_STOP,
  payload: error,
});

//REDUX-THUNK

// export const dataFetch = name => {
//   return dispatch => {
//     dispatch(ProcessStart());
//     fetch(`https://api.github.com/users/${name}`)
//       .then(response => response.json())
//       .then(json => {
//         console.log(json);
//         dispatch(ProcessSuccess(json));
//         return;
//       });
//   };
// };

export const dataFetch = name => {
  return dispatch => {
    dispatch(ProcessStart());
    axios.get(`https://api.github.com/users/${name}`).then(response => {
      console.log(response.data);
      dispatch(ProcessSuccess(response.data));
    });

    return;
  };
};
