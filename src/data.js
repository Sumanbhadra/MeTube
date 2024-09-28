export const API_KEY = "AIzaSyAhhyy4El6zNgfDzLSpbeGIbtkaoIoONvE";
// AIzaSyBbuxxRmi1fLipa9wU2Ef5RWKs7Wwm5-GU
// AIzaSyDoJra9MO9a-zuchSunxe66EalpmJ0MjU0
//AIzaSyB_Z2xS-7eshJam5uJzUP8s2m2RanNmCAI
export function dataCovertor(data) {
  if (data >= 1000000000) return `${Math.floor(data / 1000000000)}B`;
  else if (data >= 1000000) return `${Math.floor(data / 1000000)}M`;
  else if (data >= 1000) return `${Math.floor(data / 1000)}K`;
  else return data;
}
