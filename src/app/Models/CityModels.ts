import { state } from "./State";


export class CityMaster{
    public get state(): state {
        return this._state;
    }
    public set state(value: state) {
        this._state = value;
    }
    public get stateRefID(): number {
        return this._stateRefID;
    }
    public set stateRefID(value: number) {
        this._stateRefID = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get cityName(): string {
        return this._cityName;
    }
    public set cityName(value: string) {
        this._cityName = value;
    }
        constructor(private _id: number,private _cityName: string, private _stateRefID: number,private _state: state
        ){}
}