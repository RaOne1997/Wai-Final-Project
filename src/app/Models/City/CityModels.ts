import { state } from "./State";


export class CityMaster{
        public get stateName(): string {
            return this._stateName;
        }
        public set stateName(value: string) {
            this._stateName = value;
        }
        public get stateRefID(): number {
            return this._stateRefID;
        }
        public set stateRefID(value: number) {
            this._stateRefID = value;
        }
        public get cityName(): string {
            return this._cityName;
        }
        public set cityName(value: string) {
            this._cityName = value;
        }
        public get id(): number {
            return this._id;
        }
        public set id(value: number) {
            this._id = value;
        }
  
        constructor(private _id: number,private _cityName: string, private _stateRefID: number,private _stateName: string
        ){}
}
