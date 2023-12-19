import { useState } from "react";
import TransactHead from "../transact-head/transact-head";
import "./transact-history.css";

const TransactHistory = () => {
    const [transactions] = useState([
        {
          img: "../../../assets/loading.png",
          narration: 'Oluwatobi Oseni',
          amount: '5,500 NGN',
          type: 'Bank Transfer',
          reference: 'd2nj98rad39r...',
          date: 'Nov 23, 2023',
        },
        {
            img: "../../../assets/sent.png",
          narration: 'Oluwatobi Oseni',
          amount: '500 NGN',
          type: 'Bank Transfer',
          reference: 'clp188ptj000...',
          date: 'Nov 23, 2023',
        },
        {
          img: "../../../assets/add.png",
          narration: 'Oluwatobi Oseni',
          amount: '500 NGN',
          type: 'Bank Transfer',
          reference: 'clp188ptj000...',
          date: 'Nov 23, 2023',
        },
        {
          img: "../../../assets/sent.png",
          narration: 'Oluwatobi Oseni',
          amount: '36 24 GBP',
          type: 'Bank Transfer',
          reference: 'clp188ptj000...',
          date: 'Nov 23, 2023',
        },
        {
          img: "../../../assets/mtn.png",
          narration: 'MTN Airtime',
          amount: '5,000,000 GBF',
          type: 'Bills Payment',
          reference: 'clp188ptj000...',
          date: 'Nov 23, 2023',
        },
        {
          img: "../../../assets/receive.png",
          narration: 'Oluwatobi Oseni',
          amount: '40,000 NGN',
          type: 'Bank Transfer',
          reference: 'clp188ptj000...',
          date: 'Nov 23, 2023',
        },
        {
          img: "../../../assets/refund.png",  
          narration: 'Oluwatobi Oseni',
          amount: '5.000.000 GBP',
          type: 'Bank Transfer',
          reference: 'clp188ptj000...',
          date: 'Nov 23, 2023',
        },
        {
          img: "../../../assets/error.png",
          narration: 'Oluwatobi Oseni',
          amount: '5.000.000 GBP',
          type: 'Bank Transfer',
          reference: 'clp188ptj000...',
          date: 'Nov 23, 2023',
        },
      ]);

    return ( 
        <div>
            <TransactHead/>
            <div>
            
            </div>
            <table className="flex flex-col justify-center items-center">
                <thead className="text-left  font-medium bg-zinc-50 py-2 px-3">
                    <tr key="" className="p-5">
                        <th>Narration</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Reference</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="">
                    {transactions.map(transaction => (
                        <tr key={transaction.reference} className="border-b dark:border-neutral-500">
                            <td>
                                <img src={transaction.img} alt="" />
                                <div>
                                    <p className="text-xs">Payment to</p>
                                    {transaction.narration}
                                </div>
                            </td>
                            <td>
                                {transaction.amount}
                            </td>
                            <td>
                                {transaction.type}
                            </td>
                            <td>
                                {transaction.reference}
                            </td>
                            <td>
                                {transaction.date}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default TransactHistory;