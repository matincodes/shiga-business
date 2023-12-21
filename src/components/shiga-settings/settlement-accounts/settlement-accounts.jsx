import GTB from "../../../assets/GTB.svg"
import TransactHead from "../../transactions/transact-head/transact-head";

const SettlementAccounts = () => {
    return ( 
        <div className="w-full">
            <div>
                <TransactHead/>
            </div>
            <table className="w-2/3 my-0 mx-auto mt-5">
                <thead className="text-left font-medium bg-zinc-50">
                    <tr key="" className="p-5">
                        <th className="py-3 px-6">Account Information</th>
                        <th className="py-3 px-6">Currency</th>
                        <th className="py-3 px-6">Date Added</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key="" className="border-b border-zinc-100 px-5">
                        <td className="flex items-center py-3 px-6">
                            <img src={GTB} alt="" className="mr-2"/>
                            <p className="flex flex-col">
                                <span className="font-medium">Oluwatobi Osenitobi</span>
                                <span>Access Bank・0123456789</span>
                            </p>
                        </td>
                        <td className="font-medium py-3 px-6">NGN</td>
                        <td className="font-medium py-3 px-6">April 24,2023</td>
                    </tr>
                    <tr key="" className="border-b border-zinc-100 py-3">
                        <td className="flex items-center py-3 px-6">
                            <img src={GTB} alt=""  className="mr-2"/>
                            <p className="flex flex-col">
                                <span className="font-medium">Oluwatobi Osenitobi</span>
                                <span>Access Bank・0123456789</span>
                            </p>
                        </td>
                        <td className="font-medium py-3 px-6">NGN</td>
                        <td className="font-medium py-3 px-6">April 24,2023</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default SettlementAccounts;