
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
    }else{
        storedReadList.push(id);
        const storedListSet = JSON.stringify(storedReadList);
        localStorage.setItem('read-list', storedListSet)
    }
} 
export {addToStoredReadList}