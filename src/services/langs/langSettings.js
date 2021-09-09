import Rus from './ru.json';
import Eng from './en-US.json';

const local = navigator.language;
// eslint-disable-next-line import/no-mutable-exports
let lang;
switch (local) {
  case 'ru':
    lang = Rus;
    break;
  default:
    lang = Eng;
}
export { local, lang };
