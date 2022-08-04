import { useRef } from "react"
import { FormModel } from "./formModel";

export default function useForm(){
    let formRef = useRef<FormModel>();
    if(formRef.current == null){
        formRef.current = new FormModel();
    }
    return [formRef.current];
}