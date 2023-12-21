const TransactHead = ({text, btn_text}) => {
    return ( 
        <div className="flex justify-between items-center mx-14 mt-4">
            <h3 className="font-bold text-3xl">{text ? text : "Transactions"}</h3>
            <button  className="w-fit px-3">{btn_text ? btn_text : "Make a Transfer"}</button>
        </div>
     );
}
 
export default TransactHead;