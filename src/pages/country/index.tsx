import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function index() {
    const [loading, setLoading] = useState<boolean>(false)
    const [search, setsearch] = useState<string>('')
    const [countrylist, setcountrylist] = useState<Array<any>>([])
    useEffect(() => {
        console.log("cuntry created")
        getAllCountry('')
    }, [])

    const getAllCountry = async(query:string) =>{
        setLoading(true)
        try{
            const res = await axios.get('/api/country'+query)
            setcountrylist(res.data)
        }catch(e){
            console.log(e)
        }finally{
            setLoading(false)
        }
    }

    const handleSearchChange=(e:any)=>{
        console.log("change")
        setsearch(e.target.value)

        let interval_id  = setTimeout(
			() => getAllCountry(`?search=${e.target.value}`),
			1000
		);

        for(let i = Number(interval_id) -1 ; i<=1 ;i--){
            clearTimeout(i);
        }

		// Clear any timeout/interval up to that id
        
    }
    
  return (
		<>
            <input type="text" className='border p-2 m-5' placeholder='search' onChange={(e)=>handleSearchChange(e)} />
			<h1 className='font-bold text-3xl'>Country list</h1>
            <div className="border p-2">
                {
                    loading ? "Loading...":
                    countrylist.map((country:any)=>
                        <div className='bg-slate-300 p-2 mb-2' key={country.code}>
                            {country.name}
                        </div>
                    ) 
                }
            </div>
		</>
  );
}
