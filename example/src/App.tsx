import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Form } from './Form'
import Field from './Form/Field'
import Context from './Form/Context'
import useForm from './Form/useForm'
function App() {
  let [form] = useForm();

  return (
    <>
    <Form form={form}>
        <div>
          账号:
          <Field name='account' ><input/></Field>
        </div>
        <div>
          密码:
         <Field name='password' ><input/></Field>
        </div>
 
     
    </Form>
    <button onClick={()=>form.submit()} >Submit</button>
    </>
  )
}

export default App
