import { toast } from "react-toastify";

const getStoredReadList=()=>{
    // read-list
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }
}
const addToStoredReadList =(id)=>{
    const storedReadList = getStoredReadList();
    if(storedReadList.includes(id)){
        // already exist; don't add it;
        console.log(id,'Book exist')
        toast('Already You Added This Book!!')
    }else{
        storedReadList.push(id);
        const storedListSet = JSON.stringify(storedReadList);
        localStorage.setItem('read-list', storedListSet)
        //ideally not the perfect trigger toast from here, but component,
        toast('This Book Has been added to Read List')
    }
} 
export {addToStoredReadList, getStoredReadList}