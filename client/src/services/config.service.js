import axiosInstance from './axiosSetup';

async function getConfig(){
  try {
    return await axiosInstance.get('/getConfig', {
      params: {
        clientId: process.env.REACT_APP_CLIENT_ID
      }
    });
  } catch(e){
    return e.response;
  }
}

export {
  getConfig
}
