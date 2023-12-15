const BusinessProfile = () => {
    return ( 
        <div className="w-full ml-10 mr-28">
            <div>
                <h3 className="text-3xl font-bold py-2">Business Profile</h3>
            </div>
            <div>
                <div className="flex justify-between items-center border-b py-3">
                    <p className="flex flex-col text-lg justify-center">
                        <span className="font-medium">Business Logo</span>
                        <span className="inline-block">Min 400x400px, PNG or JPEG formats</span>
                    </p>
                    <p className="flex items-center">
                        <span className="flex items-center justify-center font-bold text-3xl bg-black py-4 px-3 mr-4 text-white text-center rounded-xl">DD</span>
                        <label className="border px-3 py-2 font-medium rounded-lg">
                            Upload
                            <input 
                             type="file"
                             className="hidden"  />
                        </label>
                    </p>
                </div>
                <div className="flex justify-between border-b py-3">
                    <p className="flex flex-col text-lg justify-center">
                        <span className="font-medium">Business Name</span>
                        <span>Full legal name of your business</span>
                    </p>
                    <p  className="font-medium">
                        Doma Lima
                    </p>
                </div>
                <div className="flex justify-between border-b py-3">
                    <p className="flex flex-col text-lg justify-center">
                        <span className="font-medium">Location</span>
                        <span>Full legal name of your business</span>
                    </p>
                    <p  className="font-medium">
                        Nigeria
                    </p>
                </div>
                <div className="flex justify-between border-b py-3">
                    <p className="flex flex-col text-lg justify-center">
                        <span  className="font-medium">Email Address</span>
                        <span>Email address of your business</span>
                    </p>
                    <p className="flex flex-col">
                        <span  className="font-medium">jeffereymorgan@runway.com</span>
                        <span className="flex items-center">
                            Edit
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 6 8" fill="none" className="ml-2">
                             <path d="M1.42537 7.14961L4.57509 3.99989L1.4248 0.849609" stroke="#6156F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="bevel"/>
                            </svg>
                        </span>
                    </p>
                </div>
                <div className="flex justify-between border-b py-3">
                    <p className="flex flex-col text-lg justify-center">
                        <span  className="font-medium">Support Email</span>
                        <span>Support email address for your business</span>
                    </p>
                    <p className="flex flex-col">
                        <span  className="font-medium">support@runway.com</span>
                        <span className="flex items-center">
                            Edit
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 6 8" fill="none" className="ml-2">
                             <path d="M1.42537 7.14961L4.57509 3.99989L1.4248 0.849609" stroke="#6156F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="bevel"/>
                            </svg>
                        </span>
                    </p>
                </div>
                <div className="flex justify-between border-b py-3">
                    <p className="flex flex-col text-lg justify-center">
                        <span className="font-medium">Phone Number</span>
                        <span>Phone number of your business</span>
                    </p>
                    <p className="font-medium">
                        +2347051823746
                    </p>
                </div>
                <div className="flex justify-between border-b py-3">
                    <p className="flex flex-col text-lg justify-center">
                        <span className="font-medium">Business Address</span>
                        <span>Legal address for your business</span>
                    </p>
                    <p className="font-medium w-48">2a Swisstrade drive
                    Besides Swisstrade doors,
                    Ikota, Lekki. Lagos state</p>
                </div>
            </div>
        </div>
     );
}
 
export default BusinessProfile;