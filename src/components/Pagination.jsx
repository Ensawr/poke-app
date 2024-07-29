import React from 'react'

const Pagination = ({totalPokemons,pokemonPerPage,setCurrentPage, currentPage}) => {

    let pages = []

    for(let i = 1; i <= Math.ceil(totalPokemons / pokemonPerPage); i++){
        pages.push(i);
    }   

  return (
    <div className='flex scroll-smooth gap-2 mt-16 mx-auto w-96 overflow-x-auto'>
    {    
        pages.map((page,index)=> {
            return <button 
                        className={`px-2 py-1 rounded-lg border-2 hover:border-2 hover:border-white hover:bg-[#ffcb08] hover:text-white font-bold 
                        ${page == currentPage ? 'bg-[#ffcb08] text-white border-2 border-white' : ""}`
                        } 
                        onClick={()=> setCurrentPage(page)} key={index}>
                            {page}
                    </button>
        })
        }
    </div>
  )
}

export default Pagination