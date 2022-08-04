import { PropsWithChildren } from "react";
import FormStoreContext from "./Context";
import { FormModel } from "./formModel";
import useForm from "./useForm";
type FormProps = PropsWithChildren & {
    form?: FormModel
}
export function Form(props:FormProps){
   let formInstance:FormModel;
    if(props.form){
        formInstance = props.form
    }else{
        [formInstance] = useForm();
    }
   
    const {children} = props;
    return (<FormStoreContext.Provider value={formInstance}>{children}</FormStoreContext.Provider>)
}