export class Dropdown{
    public get text(): string {
        return this._text;
    }
    public set text(value: string) {
        this._text = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    constructor(
   private _id: number,
   private _text: string){}
}