import Switch from "../../switch/switch";

const Profile = () => {
    return ( 
        <div className="w-full ml-10 mr-28">
            <div>
                <h3 className="text-3xl font-bold py-3">My Profile</h3>
            </div>
            <div>
                <div className="flex justify-between items-center border-b py-3">
                    <p className="flex flex-col text-lg justify-center">
                        <span className="font-medium">Profile Photo</span>
                        <span className="inline-block">Min 400x400px, PNG or JPEG formats</span>
                    </p>
                    <p className="flex items-center">
                        <span className="flex items-center justify-center font-bold text-3xl bg-black py-4 px-6 mr-4 text-white text-center rounded-full">D</span>
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
                        <span className="font-medium">Full Name</span>
                        <span>Your name will be visible to your team</span>
                    </p>
                    <p  className="font-medium">
                        Osaretin Obaloba
                    </p>
                </div>
                <div className="flex justify-between border-b py-3">
                    <p className="flex flex-col text-lg justify-center">
                        <span  className="font-medium">Email Address</span>
                        <span>Your name will be visible to your team</span>
                    </p>
                    <p className="flex flex-col">
                        <span  className="font-medium">osaretinobaloba@gmail.com</span>
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
                        <span>Your name will be visible to your team</span>
                    </p>
                    <p className="font-medium">
                        +2347051823746
                    </p>
                </div>
                <div className="flex justify-between border-b py-3">
                    <p className="flex flex-col text-lg justify-center">
                        <span className="font-medium">Password</span>
                        <span>Your name will be visible to your team</span>
                    </p>
                    <button className="bg-white border text-black w-fit px-2 font-medium">Change Password</button>
                </div>
                <div className="flex justify-between border-b py-3">
                    <p className="flex flex-col flex-grow-1 text-lg justify-center">
                        <span className="font-medium">Two-Factor Authentication</span>
                        <span>Your name will be visible to your team</span>
                    </p>
                    <div className="flex w-2/4">
                        <div className="w-12 mr-2">
                            <Switch/>
                        </div>
                        <p className="flex flex-col ml-2">
                            <span className="font-medium">Disabled</span>
                            <span className="text-sm">You cannot disable two-factor authentication because you belong to a business that requires it.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;