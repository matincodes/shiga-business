import TransactHead from "../../transactions/transact-head/transact-head";

const Team = () => {
    return ( 
        <div className="w-full">
            <div>
                <TransactHead/>
            </div>
            <table className="w-2/3 my-0 mx-auto mt-5">
                <thead className="text-left font-medium bg-zinc-50">
                    <tr key="" className="p-5">
                        <th className="py-3 px-6">Account Name</th>
                        <th className="py-3 px-6">Teaam Role</th>
                        <th className="py-3 px-6">2FA Status</th>
                        <th className="py-3 px-6">Last Login</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key="" className="border-b border-zinc-100 px-5">
                        <td className="flex items-center py-3 px-6">
                            <p className="flex flex-col">
                                <span className="font-medium">Oluwatobi Oseni</span>
                                <span>oluwatobi@payshiga.com</span>
                            </p>
                        </td>
                        <td className="font-medium py-3 px-6">Business Owner</td>
                        <td className="font-medium py-3 px-6">
                            <span>ON</span>
                        </td>
                        <td>April 24, 2023</td>
                    </tr>
                    <tr key="" className="border-b border-zinc-100 py-3">
                        <td className="flex items-center py-3 px-6">
                            <p className="flex flex-col">
                                <span className="font-medium">Daniel Agoziem</span>
                                <span>daniel@payshiga.com</span>
                            </p>
                        </td>
                        <td className="font-medium py-3 px-6">Developer</td>
                        <td className="font-medium py-3 px-6">
                            <span>ON</span>
                        </td>
                        <td>April 24. 2023</td>
                    </tr>
                    <tr key="" className="border-b border-zinc-100 py-3">
                        <td className="flex items-center py-3 px-6">
                            <p className="flex flex-col">
                                <span className="font-medium">Tolulope Amusa</span>
                                <span>tolu@payshiga.com</span>
                            </p>
                        </td>
                        <td className="font-medium py-3 px-6">Operation</td>
                        <td className="font-medium py-3 px-6">
                            <span>OFF</span>
                        </td>
                        <td>April 24. 2023</td>
                    </tr>
                    <tr key="" className="border-b border-zinc-100 py-3">
                        <td className="flex items-center py-3 px-6">
                            <p className="flex flex-col">
                                <span className="font-medium">Pending Invitation</span>
                                <span>chinonso@payshiga.com</span>
                            </p>
                        </td>
                        <td className="font-medium py-3 px-6">Support</td>
                        <td className="font-medium py-3 px-6">
                            <span>OFF</span>
                        </td>
                        <td>--.--</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default Team;