import { Route, Routes } from "react-router-dom";
import TransNav from "../../routes/trans-nav/trans-nav";
import TransactHistory from "../transactions/transact-history/transact-history";
import TransactLink from "../transactions/transact-link/transact-link";
import Payment from "../payments/payment/payment";
import MakeTransfer from "../make-transfer/make-transfer";
import BusinessForm from "../business-account/business-form/buisness-form";
import CreateCard from "../cards/create-card/create-card";
import Card from "../cards/card/card";
import ShigaTransfer from "../shiga-transaction/shiga-transfer/shiga-transfer";
import AllSettings from "../shiga-settings/all-settings/all-settings";
import Bills from "../manage-bills/bills/bills";
import CreateEcommerce from "../ecommerce/create-ecommerce/create-ecommerce";

const Dashboard = () => {
    return ( 
        <Routes>
            <Route path="/dashboard" element={<TransNav/>}>
                <Route index element={<TransactLink />}/>
                <Route path="transactions" element={<TransactHistory/>}/>
                <Route path="cards" element={<CreateCard />}/>
                <Route path="cards/card-detail" element={<Card />}/>
                <Route path="cards/review&pay" element={<Card />}/>
                <Route path="manage-bills/airtime" element={<Bills />}/>
                <Route path="manage-bills/airtime-review" element={<Bills />}/>
                <Route path="make-a-transfer" element={<MakeTransfer/>}/>
                <Route path="make-a-transfer/recipient" element={<BusinessForm/>}/>
                <Route path="make-a-transfer/amount" element={<BusinessForm />} />
                <Route path="make-a-transfer/review&pay" element={<BusinessForm />} />
                <Route path="payments" element={<Payment/>} />
                <Route path="payments/create-link" element={<Payment/>} />
                <Route path="payments/payment-details" element={<Payment/>} />
                <Route path="payments/view-payment" element={<Payment/>} />
                <Route path="payments/view-payment-with-list" element={<Payment/>} />
                <Route path="shiga-transfer/recipient" element={<ShigaTransfer/>} />
                <Route path="shiga-transfer/amount" element={<ShigaTransfer/>} />
                <Route path="shiga-transfer/review&pay" element={<ShigaTransfer/>} />
                <Route path="settings/profile" element={<AllSettings/>} />
                <Route path="ecommerce/products" element={<CreateEcommerce/>} />
                <Route path="ecommerce/add-product" element={<CreateEcommerce/>} />
                <Route path="settings/business-profile" element={<AllSettings/>} />
                <Route path="settings/settlement-accounts" element={<AllSettings/>} />
                <Route path="settings/team" element={<AllSettings/>} />
                <Route path="settings/fees&earnings" element={<AllSettings/>} />
                <Route path="settings/payment-methods" element={<AllSettings/>} />
                <Route path="settings/notification" element={<AllSettings/>} />
                <Route path="settings/api-keys" element={<AllSettings/>} />
            </Route>
        </Routes>
     );
}
 
export default Dashboard;