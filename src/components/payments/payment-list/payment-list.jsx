import TransactHead from "../../transactions/transact-head/transact-head";
import PurpleCard from "../../../assets/purple-card.svg"

const PaymentList = () => {
    return ( 
        <div className="w-full flex flex-col">
            <TransactHead text="Payment Link" btn_text="Create a Link"/>
            <table>
                <thead>
                    <tr key="">
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date Created</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key="">
                        <td>
                            <img src={PurpleCard} alt="" />
                            Trip to Manchester United
                        </td>
                        <td>300,000 NGN</td>
                        <td>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM6.00007 3.03662C6.37287 3.03662 6.67507 3.33883 6.67507 3.71162V6.11361H9.00007C9.37287 6.11361 9.67507 6.41582 9.67507 6.78861C9.67507 7.16141 9.37287 7.46361 9.00007 7.46361H6.00007C5.62728 7.46361 5.32507 7.16141 5.32507 6.78861V3.71162C5.32507 3.33883 5.62728 3.03662 6.00007 3.03662Z" fill="#7B7485"/>
                                </svg>
                                Active
                            </p>
                        </td>
                        <td>Apr 24, 2023</td>
                    </tr>
                    <tr key="">
                        <td>
                            <img src={PurpleCard} alt="" />
                            School Fees
                        </td>
                        <td>
                          <span>N/A</span>
                        </td>
                        <td>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM6.00007 3.03662C6.37287 3.03662 6.67507 3.33883 6.67507 3.71162V6.11361H9.00007C9.37287 6.11361 9.67507 6.41582 9.67507 6.78861C9.67507 7.16141 9.37287 7.46361 9.00007 7.46361H6.00007C5.62728 7.46361 5.32507 7.16141 5.32507 6.78861V3.71162C5.32507 3.33883 5.62728 3.03662 6.00007 3.03662Z" fill="#7B7485"/>
                                </svg>
                                !
                            </p>
                        </td>
                        <td>Apr 24, 2023</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default PaymentList;