import React from 'react'
import {Switch, Route} from 'react-router-dom'

export const useRoutes = isAuthenticated =>{

  if(isAuthenticated){



    return(<Switch >
        <Route path = "/admin">
            <AdminPage/>
            
             </Route>



      <Route path = "/product/:id">
            <ProductPage />
            
             </Route>


    </Switch>)
  }

return (<Switch>
  
        
     <Route path = "/">
            <HomePage/>
            
             </Route>

             <Route path = "/product/:id">
            <ProductPage />
            
             </Route>
            
    </Switch>)


}