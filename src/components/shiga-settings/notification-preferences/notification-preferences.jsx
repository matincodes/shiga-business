import Switch from "../../switch/switch";

const NotificationPreferences = () => {
    return ( 
        <div>
            <div>
                <h3 className="text-3xl font-bold">Notification Preferences</h3>
            </div>
            <div>
                <div className="flex justify-between mx-16 py-3 border-b">
                    <div>
                        <p>Transaction notifications</p>
                        <p>Min 400x400px, PNG or JPEG formats</p>
                    </div>
                    <div>
                        <div className="flex">
                            <div className="pr-2">
                                <Switch/>
                            </div>
                            <div>
                                <p>Transaction  emails</p>
                                <p>Notify me for every transaction</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="pr-2">
                                <Switch/>
                            </div>
                            <div>
                                <p>Customer receipt</p>
                                <p>Email my customers for every transaction.</p>
                            </div>
                        </div>  
                    </div>
                </div>

                <div className="flex justify-between mx-16 py-3 border-b">
                    <div>
                        <p>Transfer notifications</p>
                        <p>Min 400x400px, PNG or JPEG formats</p>
                    </div>
                    <div>
                        <div className="flex">
                            <div className="pr-2">
                                <Switch/>
                            </div>
                            <div>
                                <p>Debit emails</p>
                                <p>Notify me for every transfer from my account.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="pr-2">
                                <Switch/>
                            </div>
                            <div>
                                <p>Customer receipt</p>
                                <p>Email my customers for every transaction.</p>
                            </div>
                        </div>  
                    </div>
                </div>

                <div className="flex justify-between mx-16 py-3 border-b">
                    <div>
                        <p>Card notifications</p>
                        <p>VMin 400x400px, PNG or JPEG formats</p>
                    </div>
                    <div>
                        <div className="flex">
                            <div className="pr-2">
                                <Switch/>
                            </div>
                            <div>
                                <p>Card notifications</p>
                                <p>Notify me for everytime a new card is created or terminated</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="pr-2">
                                <Switch/>
                            </div>
                            <div>
                                <p>Customer transactions</p>
                                <p>Notify me of all card transactions including card withdrawals, payments, and funding.</p>
                            </div>
                        </div>  
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default NotificationPreferences;