import React from 'react'
import  style from'./Table3.module.css'
function Table2() {
  return (
    <div className={style.div}>
        <h1>Task 3</h1>
        <table className={style.table}>
            
            <thead className={style.thead}>
                <tr className={style.tr}>
                    <th className={style.sticky}>
                         Name
                    </th >
                    <th className={style.sticky}>
                         StudentID
                    </th>
                    <th>
                         Gender
                    </th>
                    <th>
                         Country
                    </th>
                    
                </tr>
            </thead>
            <tbody className={style.tbody}>
                <tr>
                    <td className={style.td}>Satyam</td>
                    <td  className={style.td}>2108488</td>
                    <td className={style.td}>Male</td>
                    <td className={style.td}>Bhatinda</td>
                    


                    

                    
            

                </tr>


                <tr >
                    <td className={style.td}>Ayush</td>
                    <td className={style.td}>2107173</td>
                    <td className={style.td}>Male</td>
                    <td className={style.td}>Japan</td>
                    

                    

                    
            

                </tr>


                <tr>
                    <td className={style.td}>Lavanya</td>
                    <td className={style.td}>2107658</td>
                    <td className={style.td}>Female</td>
                    <td className={style.td}>America</td>
                    
                    

                    
            

                </tr>

                <tr>
                    <td className={style.td}>Mahima</td>
                    <td className={style.td}>2107856</td>
                    <td className={style.td}>FeMale</td>
                    <td className={style.td}>Californnia</td>
                    
                    

                    
            

                </tr>

                <tr>
                    <td className={style.td}>Anirudh</td>
                    <td className={style.td}>2109876</td>
                    <td className={style.td}>Male</td>
                    <td className={style.td}>Loss Angeles</td>

                </tr>

               
                    
        
                
            </tbody>
        </table>

    </div>
  )
}

export default Table2