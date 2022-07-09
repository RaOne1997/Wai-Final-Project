export class HotelModel{
       public get landmark(): string {
           return this._landmark;
       }
       public set landmark(value: string) {
           this._landmark = value;
       }
       public get city(): string {
           return this._city;
       }
       public set city(value: string) {
           this._city = value;
       }
       public get pincode(): number {
           return this._pincode;
       }
       public set pincode(value: number) {
           this._pincode = value;
       }
       public get countryRefID(): number {
           return this._countryRefID;
       }
       public set countryRefID(value: number) {
           this._countryRefID = value;
       }
       public get address(): string {
           return this._address;
       }
       public set address(value: string) {
           this._address = value;
       }
       public get roomTypeRefID(): number {
           return this._roomTypeRefID;
       }
       public set roomTypeRefID(value: number) {
           this._roomTypeRefID = value;
       }
       public get staterefID(): number {
           return this._staterefID;
       }
       public set staterefID(value: number) {
           this._staterefID = value;
       }
       public get gaustNo(): number {
           return this._gaustNo;
       }
       public set gaustNo(value: number) {
           this._gaustNo = value;
       }
       public get checkin(): string {
           return this._checkin;
       }
       public set checkin(value: string) {
           this._checkin = value;
       }
       public get checkout(): string {
           return this._checkout;
       }
       public set checkout(value: string) {
           this._checkout = value;
       }
       public get hotelRating(): number {
           return this._hotelRating;
       }
       public set hotelRating(value: number) {
           this._hotelRating = value;
       }
       public get hotelImage(): any {
           return this._hotelImage;
       }
       public set hotelImage(value: any) {
           this._hotelImage = value;
       }
       public get hotelUplodeImage(): any {
           return this._hotelUplodeImage;
       }
       public set hotelUplodeImage(value: any) {
           this._hotelUplodeImage = value;
       }
       public get hotelId(): number {
           return this._hotelId;
       }
       public set hotelId(value: number) {
           this._hotelId = value;
       }
       public get name(): string {
           return this._name;
       }
       public set name(value: string) {
           this._name = value;
       }
       public get id(): number {
           return this._id;
       }
       public set id(value: number) {
           this._id = value;
       }
       constructor( private _id: number,
        private _name: string,
        private _hotelId: number,
        private _hotelUplodeImage: any,
        private _hotelImage: any,
        private _hotelRating: number,
        private _checkout: string,
        private _checkin: string,
        private _gaustNo: number,
        private _staterefID: number,
        private _roomTypeRefID: number,
        private _address: string,
        private _countryRefID: number,
        private _landmark: string,
        private _pincode: number,
        private _city: string){}
        }