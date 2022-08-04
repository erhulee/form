export class FormModel{
    store:{
        [selector:string]:any;
    };
    registeredEntity: any[];
    constructor(){
        this.store = {}
        this.registeredEntity = [];
    }
    // 组件实例
    _register(forceUpdate:any){
        this.registeredEntity.push(forceUpdate);
        return ()=>{
            this.registeredEntity = this.registeredEntity.filter(item=> item!= forceUpdate)
        }
    }
    getFieldsValue():any{
        //TODO should be deepClone, it is shallow now~
        return {...this.store}
    }
    getFieldValue(key:string):any{
        return this.store[key]
    }
    setFieldValue(key:string, value:any){
        this.store = {
            ...this.store,
            [key]: value
        }
        this.registeredEntity.forEach((cb)=> cb())
    }
    submit(){
        console.log(this)
        console.log(this.getFieldsValue())
    }
}