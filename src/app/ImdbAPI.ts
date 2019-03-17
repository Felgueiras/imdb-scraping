export default class ImdbApi {
    static runtimeIndex: number = 9;
    static yearIndex: number = 10;
    static genresIndex: number = 11;

    static addData = (value: string, keyValue: object) => {
        if (!keyValue[value]) {
            keyValue[value] = { val: 1 }
        }
        else {
            keyValue[value].val++;
        }
    }
}