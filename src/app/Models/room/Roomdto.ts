export class RoomModel {
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get roomImagesUplode(): File {
        return this._roomImagesUplode;
    }
    public set roomImagesUplode(value: File) {
        this._roomImagesUplode = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get roomTypeRefID(): number {
        return this._roomTypeRefID;
    }
    public set roomTypeRefID(value: number) {
        this._roomTypeRefID = value;
    }
    public get roomPrice(): number {
        return this._roomPrice;
    }
    public set roomPrice(value: number) {
        this._roomPrice = value;
    }
    public get roomNumber(): string {
        return this._roomNumber;
    }
    public set roomNumber(value: string) {
        this._roomNumber = value;
    }
    public get roomLevel(): number {
        return this._roomLevel;
    }
    public set roomLevel(value: number) {
        this._roomLevel = value;
    }
    public get roomImage(): any {
        return this._roomImage;
    }
    public set roomImage(value: any) {
        this._roomImage = value;
    }
    
    constructor(private _roomImage: any,
        private _roomLevel: number,
        private _id: number,
        private _roomNumber: string,
        private _roomPrice: number,
        private _roomTypeRefID: number,
        private _description: string,
        private _roomImagesUplode: File) {

    }

}
