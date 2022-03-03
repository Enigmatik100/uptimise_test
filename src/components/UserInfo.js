import React from "react";

export default UserInfo = () => {
    return (
        <div className="card rounded-none mt-6 w-[284px]">
            <div className="flex justify-between">
                <img src={profil} />
                <div className="ml-3">
                    <span className="text-secondary-color text-xl"> Cokou Jean-Eude</span>
                    <span className="font-normal text-xs"> Developpeur web</span>
                </div>
            </div>
            <div className="mt-4">
                <span className="font-normal ">Onboarding</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-warning h-2.5 rounded-full shadow" style={{ width: '50%' }}></div>
                </div>
                <div className="ring-cyan-500 dark:ring-cyan-400 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
                    <div className="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
                </div>
            </div>
        </div>
    )
}