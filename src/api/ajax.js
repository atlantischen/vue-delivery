import axios from "axios";
// 引入qs---将对象数据转UrlEncoding
import qs from "qs";
axios.interceptors.request.use(config => {
  const { method, data } = config;
  if (method.toUpperCase === "POST" && data instanceof Object) {
    config.data = qs.stringify(data);
  }
  return config
});
axios.interceptors.response.use(response=>{
  return response.data
},error=>{
  alert(error)
  return new Promise(()=>{})
});
export default axios
