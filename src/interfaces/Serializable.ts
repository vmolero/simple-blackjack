export default interface Serializable {
    toJSON(): object;
    // fromJSON(json: string, reviver: Function): Serializable;
}