import React from 'react';
import style from './Login.module.css';

function Login({ active, setActive }) {
  const classesLogin = style.login__container + ' ' + style.active;
  const classesForm = style.login__form + ' ' + style.active;

  const authData = {
    login: 'admin',
    password: 'admin',
  };

  function getCookie(name) {
    let matches = document.cookie.match(
      // eslint-disable-next-line
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  const login = (event) => {
    let appForm = event.target.closest('form'),
      inputLogin = appForm.querySelector('input[name="nick"]').value,
      inputPassword = appForm.querySelector('input[name="password"]').value;

    if (inputLogin === authData.login && inputPassword === authData.password) {
      document.cookie = 'authorization=success';
      document.cookie = 'login=' + inputLogin;
      alert('Welcome!!!');
      setActive(false);
    } else {
      document.cookie = 'authorization=failed';
      document.cookie = 'login=; max-age=-1';
      alert('Логин или пароль введены неверно.');
    }
  };

  React.useEffect(() => {
    if (window.location.pathname === '/' && getCookie('authorization') === 'success')
      setActive(false);
  });

  return (
    <div
      className={active ? classesLogin : style.login__container}>
      <div
        className={active ? classesForm : style.login__form}>
        <form className={style.form} action="#" name="login">
          <input type="text" name="nick" placeholder="Логин или e-mail" />
          <input type="password" name="password" placeholder="Пароль" />
          <button onClick={(event) => login(event)}>Войти</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
