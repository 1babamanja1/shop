import "./form.css";
import {FormattedMessage} from "react-intl";

export const Form = () => {
  return <form className='form'>
    <FormattedMessage key='registration'/>
    <input type='text' name='name' placeholder="Name"/>
    <input type='password' name='pass' placeholder="Password"/>
    <input type="submit"/>
  </form>;
};
