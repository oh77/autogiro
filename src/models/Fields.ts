export class Field {
    public position: number;
    public length: number;
    public isLeft: boolean;
    public padding: string;
    public type: string;

    public constructor(position: number, length: number, type: string) {
        this.position = position;
        this.length = length;
        this.isLeft = false;
        this.padding = '';
        this.type = type;
    }
// export class AlphaField extends Field {
//     public value: string;

//     public constructor(start: number, length: number) {
//         super(start, length);
//         this.value = '';
//     }
// }

// export class NumberField extends Field {
//     public value: number;

//     public constructor(start: number, length: number) {
//         super(start, length);
//         this.value = 0;
//     }
// }
}
