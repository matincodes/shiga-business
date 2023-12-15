const Button = () => {
    return ( 
        <div className="flex justify-between">
            <button className="bg-white border px-5 text-black mr-10 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                    <path d="M1.27637 6L5.9479 1M1.27637 6L5.9479 11M1.27637 6H11.7239" stroke="#99999C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="pl-3">Back</span>
            </button>
            <button className="px-16">
                Continue
            </button>
        </div>
     );
}
 
export default Button;