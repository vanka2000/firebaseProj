import React from 'react';
import { useForm } from "react-hook-form";
import { createApplication } from "../../firebase/applications";
import './form.css';

function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => createApplication(data);
  return (
      <div className="form_container">
        <div className="wrapper">
          <div className="leftside_form_cont">
            <h2>ХОТИТЕ ИНВЕСТИРОВАТЬ В IPO,<br/>
              НО НЕ ЗНАЕТЕ, С ЧЕГО НАЧАТЬ?<br/>
              ПРОСТО ОСТАВЬТЕ ЗАЯВКУ</h2>
            <div className="leftside_form_img"/>
          </div>
          <div className="rightside_form_cont">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="form_title"><p>Заполните форму, мы свяжемся с вами и ответим на все интересующие вас
                вопросы</p></div>
              <input {...register('name', { required: true })} required type="name" placeholder="Имя и фамилия"
                     className="input_name"/>
              <input {...register('phone', { required: true })}  required type="tel" placeholder="Телефон"
                     className="input_phone"/>
              <input {...register('email', { required: true })} required type="email" placeholder="E-mail"
                     className="input_mail"/>
              <div className="container_checkbox">
                <input {...register('policy', { required: true })} type="checkbox"/>
                <div className="checkbox_title"><p>Я согласен с политикой конфиденциальности и даю <a>согласие на
                  обработку моих персональных данных</a></p></div>
              </div>
              <div className="container_checkbox_sec">
                <input {...register('subscription', { required: true })} type="checkbox"/>
                <div className="checkbox_title"><p>Подтверждаю своё согласие на получение информации о продуктах и
                  услугах компании по sms и email</p></div>
              </div>
              <div className="form_btn_cont">
                <button role="submit" className="form_btn">Оставить заявку</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Form;
