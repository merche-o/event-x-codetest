export interface CryptoData {
    base:   string;
    target: string;
    price:  string;
    volume: string;
    change: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toCryptoData(json: string): CryptoData {
        return JSON.parse(json);
    }

    public static cryptoDataToJson(value: CryptoData): string {
        return JSON.stringify(value);
    }
}
