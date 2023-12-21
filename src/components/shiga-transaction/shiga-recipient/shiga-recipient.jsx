import Button from "../../button/button";

const ShigaRecipient = () => {
    return ( 
        <div>
            <div>
                <h2>Who are you send to?</h2>
            </div>
            <form>
                <div>
                    <label>Shiga ID</label>
                    <input 
                     type="text"
                     placeholder="Search Username" />
                </div>
                <div>
                    <label >Add a Note (optional)</label>
                    <textarea cols="20" rows="2" placeholder="Sent from Shiga"></textarea>
                </div>
                <div>
                    <Button/>
                </div>
            </form>
        </div>
     );
}
 
export default ShigaRecipient;