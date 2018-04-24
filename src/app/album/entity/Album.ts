export default class Album {
    private _name: string;
    private _author: string;
    private _numOfSongs: number;
    private _thumbnail_url: string;

    constructor (name: string, author: string, numOfSongs: number, image: string) {
        this.name = name;
        this.author = author;
        this.numOfSongs = numOfSongs;
        this.thumbnail_url = image;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }

    get numOfSongs(): number {
        return this._numOfSongs;
    }

    set numOfSongs(value: number) {
        this._numOfSongs = value;
    }

    get thumbnail_url(): string {
        return this._thumbnail_url;
    }

    set thumbnail_url(value: string) {
        this._thumbnail_url = value;
    }
}