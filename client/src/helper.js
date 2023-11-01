export const filterById =(data, id=100) => {

return data.filter((item)=>item.id== id)


}


export const getProductCategoryName =(data, id) => {


    let idName = id.slice(0,2) + '0'

    let arr = data?.find((item)=>item.id == idName)
   return arr?.sections.find((item)=>item.id == id)

     
      
    
    }

export const getIds =(data) => {
    let arr = []
       
         
    data?.forEach(element => {

   for(let i =0; i<element.sections.length; i++){
   arr.push({title: element.sections[i].translations[1].name, id: element.sections[i].id})

   }


        
    });
    return arr
      
        
}   

export const getProductsByCategory =(data, id) => {
  
    return data?.filter((item)=>item.categoryId == id)
      
        
}   