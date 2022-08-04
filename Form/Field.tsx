import React, { JSXElementConstructor, ReactElement, useEffect, useReducer } from 'react';
import { PropsWithChildren, useContext } from 'react';
import FormContext from './Context'
import { FormModel } from './formModel';
type FieldProps = {
    name: string,
    children:ReactElement<any, string | JSXElementConstructor<any>>
}
export default function Field(props:FieldProps){
    const {name, children} = props;
    let storeInstance:FormModel = useContext(FormContext) as FormModel;
    const [_, forceUpdate] = useReducer((state)=> state + 1, 0)
    useEffect(()=>{
        const unRegister = storeInstance._register(forceUpdate);
        return unRegister
    },[])
    const renderChildrenNode = React.cloneElement(children, {
        name: name,
        value: storeInstance.getFieldValue(name),
        onChange: (e:any)=>{
            const newValue = e.target.value;
            storeInstance.setFieldValue(name, newValue);
        }
    })
   
    return <>{renderChildrenNode}</>
}