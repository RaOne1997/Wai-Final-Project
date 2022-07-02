export class Country{
public get CountryName(): string {
    return this._CountryName;
}
public set CountryName(value: string) {
    this._CountryName = value;
}
public get CountryCode(): string {
    return this._CountryCode;
}
public set CountryCode(value: string) {
    this._CountryCode = value;
}
public get CountryID(): string {
    return this._CountryID;
}
public set CountryID(value: string) {
    this._CountryID = value;
}
public get Id(): number {
    return this._Id;
}
public set Id(value: number) {
    this._Id = value;
}
constructor(
      private _Id: number,
     private _CountryID: string,
     private _CountryCode: string,
     private _CountryName: string)
{}
}
