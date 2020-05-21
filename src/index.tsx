import {useState} from "react";

function getAddr(sslConnection: boolean, ipv4: boolean, segment: string) {
  const ssl = sslConnection ? "s" : "";
  const ipType = ipv4 ? "4" : "6";
  return `http${ssl}://ipv${ipType}.icanhaz${segment}.com`;
}

const getFromICanhaz = async (ipv4: boolean, ssl: boolean, segment: string): Promise<string> => {
  const response = await fetch(getAddr(ssl, ipv4, segment))
  return Promise.resolve(response.text());
}

/**
 * Returns an String containing the ipv6 or ipv4 address for your reverse DNS
 * @param ipv4 true for getting the ipv4, false for ipv6
 * @param sslConnection if true, try ssl connection first.
 */
export const useReverseDNS = (ipv4: boolean, sslConnection: boolean): string => {
  const [stateDns, setStateDns] = useState<string>("");
  getFromICanhaz(ipv4, sslConnection, "ptr").then(text => setStateDns(text))
  return stateDns;
}

/**
 * Returns an String containing ipv6 or ipv4 address for localmachine
 * @param ipv4 true for getting the ipv4, false for ipv6
 * @param sslConnection if true, try ssl connection first.
 */
export const usePublicIp = (ipv4: boolean, sslConnection: boolean): string => {
  const [stateIp, setStateIp] = useState<string>("");
  getFromICanhaz(ipv4, sslConnection, "ip")
    .then(text => setStateIp(text))
    .catch(() =>{
        setStateIp("")
      })
  return stateIp;
};
