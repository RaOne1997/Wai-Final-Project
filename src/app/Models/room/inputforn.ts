export class bookinginput{
    public get toairport(): string {
        return this._toairport;
    }
    public set toairport(value: string) {
        this._toairport = value;
    }
    public get toAirportCode(): string {
        return this._toAirportCode;
    }
    public set toAirportCode(value: string) {
        this._toAirportCode = value;
    }
    public get fromairport(): string {
        return this._fromairport;
    }
    public set fromairport(value: string) {
        this._fromairport = value;
    }
    public get fromAirportCode(): string {
        return this._fromAirportCode;
    }
    public set fromAirportCode(value: string) {
        this._fromAirportCode = value;
    }
    public get flightCode(): string {
        return this._flightCode;
    }
    public set flightCode(value: string) {
        this._flightCode = value;
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
    public get flightCustomerDetails(): any {
        return this._FlightCustomerDetails;
    }
    public set flightCustomerDetails(value: any) {
        this._FlightCustomerDetails = value;
    }
    public get customerContactEmail(): string {
        return this._CustomerContactEmail;
    }
    public set customerContactEmail(value: string) {
        this._CustomerContactEmail = value;
    }
    public get customerContactMobile(): number {
        return this._CustomerContactMobile;
    }
    public set customerContactMobile(value: number) {
        this._CustomerContactMobile = value;
    }
    public get flightScheduleRefId(): number {
        return this._FlightScheduleRefId;
    }
    public set flightScheduleRefId(value: number) {
        this._FlightScheduleRefId = value;
    }
    public get passengerNameRecord(): number {
        return this._PassengerNameRecord;
    }
    public set passengerNameRecord(value: number) {
        this._PassengerNameRecord = value;
    }

    constructor(private _PassengerNameRecord: number,
    private _FlightScheduleRefId: number,
    private _CustomerContactMobile: number,
    private _CustomerContactEmail: string,
    private _FlightCustomerDetails: any,
    private _arrivalDate: any,
    private _departureDate: any,
    private _flightCode: string,
    private _fromAirportCode: string,
    private _fromairport: string,
    private _toAirportCode: string,
    private _toairport: string
    
    
    
    
    ){}
}