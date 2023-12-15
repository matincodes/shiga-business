import Card from '../../../assets/Card.png'

const CardList = () => {
    return ( 
        <div>
            <div className="flex justify-between items-center ml-14 mt-4">
                <h3 className="font-bold text-3xl">Cards</h3>
                <button  className="w-fit px-3">Get a New Card</button>
            </div>
            <div>
                <div>
                    <button>
                        Filter
                    </button>
                    <button>
                        Export
                    </button>
                </div>
                <div>
                    <div>
                    </div>
                    <div>
                        <input
                         type="text"
                         placeholder="Search" />
                    </div>
                </div>
            </div>
            <div>
                <table>
                    <thead>
                        <tr key="">
                            <th>Card</th>
                            <th>Assigned to</th>
                            <th>Balance</th>
                            <th>Currency</th>
                            <th>Status</th>
                            <th>Date Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key="">
                            <td>
                                <img src={Card} alt="" />
                                <p>
                                    <span>Virtual Card</span>
                                    <span>*** 8594</span>
                                </p>
                            </td>
                            <td>
                                Timothy Asiwaju
                            </td>
                            <td>
                                10,000 USD
                            </td>
                            <td>
                                USD
                            </td>
                            <td>
                                <p>
                                    Locked
                                </p>
                            </td>
                            <td>
                                Nov 23, 2023
                            </td>
                        </tr>
                        <tr key="">
                        <td>
                            <img src={Card} alt="" />
                            <p>
                                <span>Virtual Card</span>
                                <span>*** 8594</span>
                            </p>
                        </td>
                        <td>
                            Bola Oseni
                        </td>
                        <td>
                            10,000 USD
                        </td>
                        <td>
                            USD
                        </td>
                        <td>
                            <p>
                                Ready to use
                            </p>
                        </td>
                        <td>
                            Nov 23, 2023
                        </td>
                    </tr>
                    <tr key="">
                    <td>
                        <img src={Card} alt="" />
                        <p>
                            <span>Virtual Card</span>
                            <span>*** 8594</span>
                        </p>
                    </td>
                    <td>
                        Tobi Tinubu
                    </td>
                    <td>
                        10,000 USD
                    </td>
                    <td>
                        USD
                    </td>
                    <td>
                        <p>
                            Ready to use
                        </p>
                    </td>
                    <td>
                        Nov 23, 2023
                    </td>
                </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default CardList;