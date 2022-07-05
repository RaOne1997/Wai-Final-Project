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
 public get id(): number {
    return this._id;
 }
 public set id(value: number) {
    this._id = value;
 }
 constructor(
  private _id: number,
    
    private _stateID: string,
    
    
     private _stateName: string,
     
    
    private _countryrefID: number,

    
     private _Countryref: Country){

      }
     
 }
