import React from 'react'
import { AppProvider } from './Contexts/AppContext'
import CardList from './Components/CardList'
import Pages from './Components/Pages'

 const App=()=> {
  return (
    <AppProvider>
      <div className='p-10 max-w-[1200px] w-full mx-auto'>
        <CardList/>
        <Pages/>
      </div>
    </AppProvider>
    
  )
}
export default App;