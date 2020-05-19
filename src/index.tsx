import {useState} from "react";

function getAddr(sslConnection: boolean, ipv4: boolean,segment:string) {
  const ssl = sslConnection?"s":"";
  const ipType = ipv4?"4":"6";
  return `http${ssl}://ipv${ipType}.icanhaz${segment}.com`;
}

export const useReverseDNS = (ipv4:boolean, sslConnection:boolean):string => {
  const [stateIp,setStateIp] = useState<string>("");
  fetch(getAddr(sslConnection, ipv4,"ptr"))
    .then(response=>{
      response.text().then(text => setStateIp(text))
    })
    .catch(reason => {throw 'Error getting IP '+reason});
  return stateIp;
}
export const usePublicIp = (ipv4:boolean, sslConnection:boolean):string => {
  const [stateIp,setStateIp] = useState<string>("");
  fetch(getAddr(sslConnection, ipv4,"ip"))
    .then(response=>{
      response.text().then(text => setStateIp(text))
    })
    .catch(reason => {throw 'Error getting IP '+reason});
  return stateIp;
};
