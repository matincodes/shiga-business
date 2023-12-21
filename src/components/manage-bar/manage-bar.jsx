const ManageBar = () => {
    return ( 
        <div>
            <div>
                <button className="flex bg-white border">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                        <path d="M1.66101 1.5H14.336M3.91101 6H12.086M6.72351 10.5H9.27351" stroke="#99999C" stroke-width="1.6" stroke-linecap="round"/>
                    </svg>
                    Filter
                </button>
                <button className="flex bg-white border"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M0.976929 8.33722V10.4184C0.976929 11.8963 2.17495 13.0943 3.65278 13.0943H10.3424C11.8202 13.0943 13.0183 11.8963 13.0183 10.4184V8.33722M6.92327 8.7832V0.904297M6.92327 0.904297L3.50412 4.32344M6.92327 0.904297L10.3424 4.32344" stroke="#99999C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Generate Statement
                </button>
            </div>
        </div>
     );
}
 
export default ManageBar;