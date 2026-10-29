import graph from "../../assets/images/income-graph.png"

const Income = () => {
   const transactionsData = [
     { amount: 7200, date: "Jan 3, '26", id: '1' },
     { amount: 5600, date: "Dec 12, '25", id: '2' },
     { amount: 9800, date: "Dec 3, '25", id: '3' },
   ];
   return (
     <section className='host-income'>
       <h2>Income</h2>
       <p>
         Last <span>30 days</span>
       </p>
       <h2>$2,260</h2>
       <img
         src={graph}
         alt='Income graph'
       />
       <div className='info-header'>
         <h3>Your transactions (3)</h3>
         <p>
           Last <span>30 days</span>
         </p>
       </div>
       <div className='transactions'>
         {transactionsData.map((item) => (
           <div key={item.id} className='transaction'>
             <h3>${item.amount}</h3>
             <p>{item.date}</p>
           </div>
         ))}
       </div>
     </section>
   );
}

export default Income