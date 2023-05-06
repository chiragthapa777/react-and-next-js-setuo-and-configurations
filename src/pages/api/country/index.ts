// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { country } from '../../../../data'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log("indasdgasdgsd")
    switch(req.method){
        case "GET":{
          console.log("indasdgasdgsd")
            const {search} = req.query
            let data : any[] = [...country]    
            if(search){
                data = data.filter((c:any)=>c.name.toLowerCase().includes(search?.toLowerCase()))
            }
            setTimeout(()=>{
              res.status(200).json(data)
            },500)
            break
        }
    }
  
}
