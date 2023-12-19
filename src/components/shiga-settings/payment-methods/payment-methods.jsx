import { useState } from "react";
import Switch from "../../switch/switch";

const PaymentMethods = () => {
    const [cardsEnabled, setCardsEnabled] = useState(false);
//   const [bankTransfersEnabled, setBankTransfersEnabled] = useState(false);

  const handleToggleCards = () => {
    setCardsEnabled(!cardsEnabled);
  };

//   const handleToggleBankTransfers = () => {
//     setBankTransfersEnabled(!bankTransfersEnabled);
//   };

    return ( 
        <div className="w-full">
            <div>
                <h3 className="text-3xl font-bold">Payment Methods</h3>                
            </div>
            <div>
                <div className="flex justify-between mx-16 py-3 border-b">
                    <div>
                        <p>Cards </p>
                        <p>Visa, Mastercard, Discover, Verve.</p>
                    </div>
                    <div className="flex">
                        <div className="pr-2">
                            <Switch SwitchOn={cardsEnabled} onToggle={handleToggleCards}/>
                        </div>
                        <p>{cardsEnabled ? 'Enabled' : 'Disabled'}</p>
                    </div>
                </div>

                <div className="flex justify-between mx-16 py-3 border-b">
                    <div>
                        <p>Bank Transfers</p>
                        <p>Allows you receive payments via bank transfers.</p>
                    </div>
                    <div className="flex">
                        <div className="pr-2">
                            <Switch />
                        </div>
                        <p>Enabled</p>
                    </div>
                </div>

                <div className="flex justify-between mx-16 py-3 border-b">
                    <div>
                        <p>Cards </p>
                        <p>Visa, Mastercard, Discover, Verve.</p>
                    </div>
                    <div className="flex">
                        <div className="pr-2">
                            <Switch/>
                        </div>
                        <p>Enabled  </p>
                    </div>
                </div>

                <div className="flex justify-between mx-16 py-3 border-b">
                    <div>
                        <p>Cards </p>
                        <p>Visa, Mastercard, Discover, Verve.</p>
                    </div>
                    <div className="flex">
                        <div className="pr-2">
                            <Switch/>
                        </div>
                        <p>Enabled  </p>
                    </div>
                </div>

                <div className="flex justify-between mx-16 py-3 border-b">
                    <div>
                        <p>Cards </p>
                        <p>Visa, Mastercard, Discover, Verve.</p>
                    </div>
                    <div className="flex">
                        <div className="pr-2">
                            <Switch/>
                        </div>
                        <p>Enabled  </p>
                    </div>
                </div>

                <div className="flex justify-between mx-16 py-3 border-b">
                    <div>
                        <p>Cards </p>
                        <p>Visa, Mastercard, Discover, Verve.</p>
                    </div>
                    <div className="flex">
                        <div className="pr-2">
                            <Switch/>
                        </div>
                        <p>Enabled</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PaymentMethods;