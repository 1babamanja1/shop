import Rus from "./ru.json";
import Eng from "./en-US.json";

let local = navigator.language;
let lang;
switch (local) {
    case "ru":
        lang = Rus;
        break;
    default:
        lang = Eng;
}
export {local, lang}