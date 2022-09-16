export class Customer{
public get gender(): string {
    return this._gender;
}
public set gender(value: string) {
    this._gender = value;
}
public get id(): number {
    return this._id;
}
public set id(value: number) {
    this._id = value;
}
public get email1(): string {
    return this._email1;
}
public set email1(value: string) {
    this._email1 = value;
}
public get telephone1(): number {
    return this._telephone1;
}
public set telephone1(value: number) {
    this._telephone1 = value;
}
public get pinCode(): number {
    return this._pinCode;
}
public set pinCode(value: number) {
    this._pinCode = value;
}
public get countryRefId(): number {
    return this._countryRefId;
}
public set countryRefId(value: number) {
    this._countryRefId = value;
}
public get stateRefId(): number {
    return this._stateRefId;
}
public set stateRefId(value: number) {
    this._stateRefId = value;
}
public get cityRefId(): number {
    return this._cityRefId;
}
public set cityRefId(value: number) {
    this._cityRefId = value;
}
public get address3(): string {
    return this._address3;
}
public set address3(value: string) {
    this._address3 = value;
}
public get address2(): string {
    return this._address2;
}
public set address2(value: string) {
    this._address2 = value;
}
public get address1(): string {
    return this._address1;
}
public set address1(value: string) {
    this._address1 = value;
}
public get dateOfBirth(): any {
    return this._dateOfBirth;
}
public set dateOfBirth(value: any) {
    this._dateOfBirth = value;
}
public get fullName(): string {
    return this._fullName;
}
public set fullName(value: string) {
    this._fullName = value;
}
public get profilePhoto(): any {
    return this._profilePhoto;
}
public set profilePhoto(value: any) {
    this._profilePhoto = value;
}
public get profilePhotoTouplode(): any {
    return this._profilePhotoTouplode;
}
public set profilePhotoTouplode(value: any) {
    this._profilePhotoTouplode = value;
}
public get lastName(): string {
    return this._lastName;
}
public set lastName(value: string) {
    this._lastName = value;
}
public get firstName(): string {
    return this._firstName;
}
public set firstName(value: string) {
    this._firstName = value;
}
public get accountRefID(): number {
    return this._accountRefID;
}
public set accountRefID(value: number) {
    this._accountRefID = value;
}
constructor(
    private _accountRefID: number,
    private _firstName: string,
    private _lastName: string,
    private _profilePhotoTouplode: any,
    private _profilePhoto: any,
    private _fullName: string,
    private _dateOfBirth: any,
    private _address1: string,
    private _address2: string,
    private _address3: string,
    private _cityRefId: number,
    private _stateRefId: number,
    private _countryRefId: number,
    private _pinCode: number,
    private _telephone1: number,
    private _email1: string,
    private _id: number,
    private _gender: string ) {
        
    }
    
    

}






export interface Customers{

   accountRefID: number,
   firstName:string,
   lastName:string,
   profilePhotoTouplode:any,
   profilePhoto:any,
   fullName:string,
   dateOfBirth:any,
   address1:string,
   address2:string,
   address3:string,
   gender:any,
   cityRefId: number,
   stateRefId: number,
   countryRefId: number,
   pinCode: number,
   telephone1: number,
   email1:string,


}









   