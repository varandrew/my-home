export interface Air {
  _id: ID;
  date: string;
  pm25: string;
  pm10: string;
  o3: string;
  no2: string;
  so2: string;
  co: string;
}

export interface Forecast {
  _id:      ID;
  dates:    string[];
  all_pm2:  number[];
  all_pm10: number[];
  all_o3:   number[];
  all_no2:  number[];
  all_so2:  number[];
  all_co:   number[];
}

export interface ID {
  $oid: string;
}
