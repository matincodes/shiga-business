import Button from "../../button/button";

const BulkRecipient = () => {
    return ( 
        <div>
            <table>
                <thead>
                    <tr key="">
                        <th>S/N</th>
                        <th>Account Name</th>
                        <th>Bank Name</th>
                        <th>Account Number</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key="">
                        <td>01</td>
                        <td>Odumodu Black</td>
                        <td>Access Bank PLC</td>
                        <td>01234567890</td>
                        <td>12,000 NGN</td>
                        <td>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM3.07507 5.99971C3.07507 5.62691 3.37728 5.32471 3.75007 5.32471H8.25007C8.62287 5.32471 8.92507 5.62691 8.92507 5.99971C8.92507 6.3725 8.62287 6.67471 8.25007 6.67471H3.75007C3.37728 6.67471 3.07507 6.3725 3.07507 5.99971Z" fill="#D14141"/>
                                </svg>
                                Invalid
                            </span>
                        </td>
                    </tr>
                    <tr key="">
                        <td>02</td>
                        <td>Banky Wellington</td>
                        <td>OPay</td>
                        <td>01234567890</td>
                        <td>200,000 NGN</td>
                        <td>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM8.84218 4.01446C9.10997 4.28225 9.10997 4.71642 8.84218 4.9842L5.84218 7.9842C5.5744 8.25199 5.14023 8.25199 4.87244 7.9842L3.15815 6.26992C2.89036 6.00213 2.89036 5.56796 3.15815 5.30017C3.42594 5.03238 3.86011 5.03238 4.1279 5.30017L5.35731 6.52958L7.87244 4.01446C8.14023 3.74667 8.5744 3.74667 8.84218 4.01446Z" fill="#2EA14B"/>
                                </svg>
                                Verified
                            </span>
                        </td>
                    </tr>
                    <tr key="">
                        <td>03</td>
                        <td>Annie Idibia</td>
                        <td>First Bank PLC</td>
                        <td>01234567890</td>
                        <td>25,000 NGN</td>
                        <td>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM8.84218 4.01446C9.10997 4.28225 9.10997 4.71642 8.84218 4.9842L5.84218 7.9842C5.5744 8.25199 5.14023 8.25199 4.87244 7.9842L3.15815 6.26992C2.89036 6.00213 2.89036 5.56796 3.15815 5.30017C3.42594 5.03238 3.86011 5.03238 4.1279 5.30017L5.35731 6.52958L7.87244 4.01446C8.14023 3.74667 8.5744 3.74667 8.84218 4.01446Z" fill="#2EA14B"/>
                                </svg>
                                Verified
                            </span>
                        </td>
                    </tr>
                    <tr key="">
                        <td>04</td>
                        <td>Korede Bello</td>
                        <td>United bank of Africa</td>
                        <td>01234567890</td>
                        <td>2,399 NGN</td>
                        <td>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM8.84218 4.01446C9.10997 4.28225 9.10997 4.71642 8.84218 4.9842L5.84218 7.9842C5.5744 8.25199 5.14023 8.25199 4.87244 7.9842L3.15815 6.26992C2.89036 6.00213 2.89036 5.56796 3.15815 5.30017C3.42594 5.03238 3.86011 5.03238 4.1279 5.30017L5.35731 6.52958L7.87244 4.01446C8.14023 3.74667 8.5744 3.74667 8.84218 4.01446Z" fill="#2EA14B"/>
                                </svg>
                                Verified
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <Button/>
            </div>
            
        </div>
     );
}
 
export default BulkRecipient;