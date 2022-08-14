export class FlightBooking {
    public get toairport(): any {
        return this._toairport;
    }
    public set toairport(value: any) {
        this._toairport = value;
    }
    public get toAirportCode(): any {
        return this._toAirportCode;
    }
    public set toAirportCode(value: any) {
        this._toAirportCode = value;
    }
    public get fromairport(): any {
        return this._fromairport;
    }
    public set fromairport(value: any) {
        this._fromairport = value;
    }
    public get fromAirportCode(): any {
        return this._fromAirportCode;
    }
    public set fromAirportCode(value: any) {
        this._fromAirportCode = value;
    }
    public get flightCode(): any {
        return this._flightCode;
    }
    public set flightCode(value: any) {
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
    public get passengerNameRecord(): number {
        return this._passengerNameRecord;
    }
    public set passengerNameRecord(value: number) {
        this._passengerNameRecord = value;
    }
    public get flightScheduleRefId(): number {
        return this._flightScheduleRefId;
    }
    public set flightScheduleRefId(value: number) {
        this._flightScheduleRefId = value;
    }
    public get flightCustomerDetails(): any {
        return this._flightCustomerDetails;
    }
    public set flightCustomerDetails(value: any) {
        this._flightCustomerDetails = value;
    }
    public get customerContactMobile(): number {
        return this._customerContactMobile;
    }
    public set customerContactMobile(value: number) {
        this._customerContactMobile = value;
    }
    public get customerContactEmail(): string {
        return this._customerContactEmail;
    }
    public set customerContactEmail(value: string) {
        this._customerContactEmail = value;
    }
    public get bookingTimeStamp(): any {
        return this._bookingTimeStamp;
    }
    public set bookingTimeStamp(value: any) {
        this._bookingTimeStamp = value;
    }

    constructor(private _bookingTimeStamp: any,
        private _customerContactEmail: string,
        private _customerContactMobile: number,
        private _flightCustomerDetails: any,
        private _flightScheduleRefId: number,
        private _passengerNameRecord: number,
        private _arrivalDate: any,
        private _departureDate: any,
        private _flightCode: string,
        private _fromAirportCode: string,
        private _fromairport: string,
        private _toAirportCode: string,
        private _toairport: string,

    ) { }
    // id: 2
}