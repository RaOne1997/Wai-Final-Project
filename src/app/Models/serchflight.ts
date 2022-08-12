export class Searchflightresult{
public get id(): number {
    return this._id;
}
public set id(value: number) {
    this._id = value;
}
public get flightlogo(): any {
    return this._flightlogo;
}
public set flightlogo(value: any) {
    this._flightlogo = value;
}
public get flightRefId(): number {
    return this._flightRefId;
}
public set flightRefId(value: number) {
    this._flightRefId = value;
}
public get flightName(): string {
    return this._flightName;
}
public set flightName(value: string) {
    this._flightName = value;
}
public get departureDate(): any {
    return this._departureDate;
}
public set departureDate(value: any) {
    this._departureDate = value;
}
public get arrivalDate(): any {
    return this._arrivalDate;
}
public set arrivalDate(value: any) {
    this._arrivalDate = value;
}
constructor(    

    private _arrivalDate: any,
    private _departureDate: any,
    private _flightName: string,
    private _flightRefId: number,
    private _flightlogo: any,
    private _id: number){}
}