// INITIALIZATION
const date = new Date();
// GET 12HR FORMAT
class HH {
    static get12hformat():number {

        let hh:number = date.getHours();

        if (hh > 12) {
            return hh - 12;
        } else {
            return hh;
        }
    }
}
// 12HH MM SS YYYY DD
const _12HrFormat = HH.get12hformat();
const mm: number = date.getMinutes();
const ss: number = date.getSeconds();
const yyyy: number = date.getFullYear();
// GET DAY OF THE WEEK
class day {
    static getDay() {

    }
}
// FORMAT
const format: string = `${_12HrFormat}:${mm}:${ss}`;
// OUTPUT TO THE CONSOLE
let log: (message: string) => void;
log = (message) => { console.log(message) }

log(`${format}`);
