import { Country } from "./Country"

 
 export class state{
 public get Countryref(): Country {
    return this._Countryref;
 }
 public set Countryref(value: Country) {
    this._Countryref = value;
 }
 public get countryrefID(): number {
    return this._countryrefID;
 }
 public set countryrefID(value: number) {
    this._countryrefID = value;
 }
 public get stateName(): string {
    return this._stateName;
 }
 public set stateName(value: string) {
    this._stateName = value;
 }
 public get stateID(): string {
    return this._stateID;
 }
 public set stateID(value: string) {
    this._stateID = value;
 }
 public get Id(): number {
    return this._Id;
 }
 public set Id(value: number) {
    this._Id = value;
 }
 constructor(
  private _Id: number,
    
    private _stateID: string,
    
    
     private _stateName: string,
     
    
    private _countryrefID: number,

    
     private _Countryref: Country){

      }
     
 }
