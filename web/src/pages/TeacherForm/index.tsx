import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

function TeacherForm(){
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }    
  ]);

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');      
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');      

  function addNewScheduleTime(){
    setScheduleItems(
      [...scheduleItems,
        { week_day: 0, from: '08:00 AM', to: '12:00 am' }    
      ]
    );
  }

  function setScheduleItemValue(position: number, field: string, value: string){
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) =>{
      if (index == position){
        return { ...scheduleItem, [field]: value};
      }
      return scheduleItem;
    })
    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e: FormEvent){
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Sucesso no cadastro!');}
    ).catch( () => {
      alert('Erro no cadastro!');}
    );

    console.log(scheduleItems);
  }

  return (
    <div id="page-teacher-form" className="container">
    
      <PageHeader 
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
        <fieldset>
          <legend>Seus dados</legend>
            <Input 
              name="name" 
              label="Nome Completo" 
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />
            <Input 
              name="avatar" 
              label="Avatar" 
              value={avatar}
              onChange={(e) => { setAvatar(e.target.value) }}
            />
            <Input 
              name="whatsapp" 
              label="Whatsapp" 
              value={whatsapp}
              onChange={(e) => { setWhatsapp(e.target.value) }}
            />
            <Textarea 
              name="bio" 
              label="Biografia" 
              value={bio}
              onChange={(e) => { setBio(e.target.value) }}                            
            />

        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
            <Select 
              name="subject" 
              label="Matéria" 
              value={subject}
              onChange={(e) => { setSubject(e.target.value) }}                                          
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
            <Input 
              name="cost" 
              label="Custo da sua hora por aula" 
              value={cost}
              onChange={(e) => { setCost(e.target.value) }}                            
            />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleTime}>
              + Novos Horários
            </button>
          </legend>

          {
            scheduleItems.map((scheduleItem, index) => {
              return(
                <div className="schedule-item" key={scheduleItem.week_day}>
                  <Select
                      name="week_day" 
                      label="Dia da Semana"                       
                      value={scheduleItem.week_day}
                      onChange = { e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                  <Input 
                    name="from" 
                    label="Das" 
                    type="time"                    
                    value={scheduleItem.from}
                    onChange = { e => setScheduleItemValue(index, 'from', e.target.value)}
                  />
                  <Input 
                    name="to" 
                    label="Até" 
                    type="time"             
                    value={scheduleItem.to}                           
                    onChange = { e => setScheduleItemValue(index, 'to', e.target.value)}                   
                  />
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
          <button type="submit" >
            Salvar cadastro
          </button>
        </footer>
        </form>
      </main>

    </div>
  )
}

export default TeacherForm;