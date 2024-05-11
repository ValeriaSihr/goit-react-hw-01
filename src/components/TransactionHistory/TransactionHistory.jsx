import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    
    return (       
            <table>
                <thead className={css.table}>
                <tr>
                <th className={css.text}>Type</th>
                <th className={css.text}>Amount</th>
                <th className={css.text}>Currency</th>
                </tr>
             </thead>

            <tbody>
                
          {items.map((item) => 
            <tr key={item.id}> 
                <th className={css.table}>{item.type}</th>
                <th className={css.table}>{item.amount}</th>
                <th className={css.table}>{item.currency}</th>
            </tr>
          )}
   
             </tbody>
         </table>
)}
        
       
export default TransactionHistory