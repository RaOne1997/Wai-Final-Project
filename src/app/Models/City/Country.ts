export class Country{
public get id(): number {
    return this._id;
}
public set id(value: number) {
    this._id = value;
}
public get countryName(): string {
    return this._countryName;
}
public set countryName(value: string) {
    this._countryName = value;
}
public get countryCode(): string {
    return this._countryCode;
}
public set countryCode(value: string) {
    this._countryCode = value;
}
public get CountryID(): string {
    return this._CountryID;
}
public set CountryID(value: string) {
    this._CountryID = value;
}
public get countryID(): number {
    return this._countryID;
}
public set countryID(value: number) {
    this._countryID = value;
}
constructor(
    private _id: number,
      private _countryID: number,
     private _CountryID: string,
     private _countryCode: string,
     private _countryName: string)
{}
}

