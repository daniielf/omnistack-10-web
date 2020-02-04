import React from 'react';
import Axios from 'axios';

const BASE_URL = "http://localhost:3333/";
const Api = Axios.create({
  baseURL:BASE_URL
});


export default Api;