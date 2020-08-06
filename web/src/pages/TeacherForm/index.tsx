import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm(){
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }    
  ]);

  function addNewScheduleTime(){
    setScheduleItems(
      [...scheduleItems,
        { week_day: 0, from: '08:00 AM', to: '12:00 am' }    
      ]
    );
  }

  return (
    <div id="page-teacher-form" className="container">
    
      <PageHeader 
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>

        <fieldset>
          <legend>Seus dados</legend>
            <Input name="name" label="Nome Completo" />
            <Input name="avatar" label="Avatar" />
            <Input name="whatsapp" label="Whatsapp" />
        </fieldset>

        <fieldset>
          <legend>Seus dados</legend>
            <Select 
              name="subject" 
              label="Matéria" 
               options={[
                { value: 'Artes', label: 'Artes'},
                { value: 'Biologia', label: 'Biologia'},
                { value: 'Ciências', label: 'Ciências'},
                { value: 'Educação Física', label: 'Educação Física'},
                { value: 'Geografia', label: 'Geografia'},
                { value: 'História', label: 'História'},
                { value: 'Matemática', label: 'Matemática'},
                { value: 'Portuguẽs', label: 'Portuguẽs'},
                { value: 'Química', label: 'Química'},                
              ]}
            />
            <Input name="cost" label="Custo da sua hora por aula" />
            <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleTime}>
              + Novos Horários
            </button>
          </legend>

          {
            scheduleItems.map(scheduleItem => {
              return(
                <div className="schedule-item" key={scheduleItem.week_day}>
                  <Select
                      name="week_day" 
                      label="Dia da Semana"                       
                      options={[
                        { value: '0', label: 'Segunda-Feira'},
                        { value: '1', label: 'Terça-Feira'},
                        { value: '2', label: 'Quarta-Feira'},
                        { value: '3', label: 'Quinta-Feira'},
                        { value: '4', label: 'Sexta-Feira'},
                        { value: '5', label: 'Sábado'},
                        { value: '6', label: 'Domingo'},
                      ]}
                  />          
                  <Input name="from" label="Das" type="time"/>
                  <Input name="to" label="Até" type="time"/>
                </div>)
            })
          }
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante"/>
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>

      </main>

    </div>
  )
}

export default TeacherForm;