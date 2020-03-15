import {SubDataInterface} from "./subdata.interface";

export interface CountryInterface {
    id: string;
    iso2Code: string;
    name: string;
    region: SubDataInterface;
    adminregion: SubDataInterface;
    incomeLevel: SubDataInterface;
    lendingType: SubDataInterface;
    capitalCity: string;
    longitude: string;
    latitude: string;
}
