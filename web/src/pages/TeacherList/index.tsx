import React from 'react';

import PageHeader from '../../components/PageHeader';

import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList(){
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffy disponiveis.">
        <form id="search-teachers">

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

          <Input name="time" label="Hora" />

        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;