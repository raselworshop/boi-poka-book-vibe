const getAddWishListStored = () => {
    const wishListStored = localStorage.getItem('wish-list');
    if (wishListStored) {
        const parseWishList = JSON.parse(wishListStored);
        return parseWishList;
    }{
        return [];
    }
}

const addToWishListStored = (id) =>{
    const storedWishList = getAddWishListStored();
    if(storedWishList.includes(id)){
        console.log(id, 'This book is in wish listed already!!')
    }else{
        storedWishList.push(id);
        const storedWishListSet = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListSet)
    }
}
export {addToWishListStored}