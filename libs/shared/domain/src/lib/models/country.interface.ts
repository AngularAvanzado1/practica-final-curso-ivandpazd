import {SubData} from "./subdata.interface";

export interface Country {
    message: string;
    id: string;
    iso2Code: string;
    name: string;
    region: SubData;
    adminregion: SubData;
    incomeLevel: SubData;
    lendingType: SubData;
    capitalCity: string;
    longitude: string;
    latitude: string;
}
