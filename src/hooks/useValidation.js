import { useState, useCallback} from "react";

export function useValidation() {

  // Стейт-переменная валидности формы 
  const [isValid, setIsValid] = useState(false);

  // Стейт-переменная текста ошибки валидации
  const [errorMessage, setErrorMessage] = useState({});

  // Функция обработки валидации при срабатывании события
  function handleChangeValidation(evt) {
    // Записываем текст ошибки события в стейт-переменную errorMessage
    setErrorMessage({...errorMessage, [evt.target.name]: evt.target.validationMessage });
    // Проверяем форму на валидность
    setIsValid(evt.target.closest('.popup__form').checkValidity());
  }

  // Функция сброса валидации
  const resetValidation = useCallback((newErrorMessage = {}, newIsValid = false) => {
      setErrorMessage(newErrorMessage);
      setIsValid(newIsValid);
    }, [setErrorMessage, setIsValid])

  return {isValid, errorMessage, handleChangeValidation, resetValidation};

};


