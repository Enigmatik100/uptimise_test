import React, { useState } from "react";
import profil from '../profil.png';
import Button from '@mui/material/Button';
import Calendar from "./Calendar";

function formatDate(date) {
    const str = Intl.DateTimeFormat('fr', { dateStyle: 'full' }).format(date)
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const Dashboard = () => {
    const userName = 'Jean-Eude'

    const [date, SetDate] = useState(new Date())

    return (
        <div className="container py-[90px] px-10 bg-[#F7F8FC]">
            <span className="text-sm"> {formatDate(date)}</span> <br />
            <span className="text-2xl font-bold">Bonjour {userName}</span>
            <div className="flex">
                <div className="card rounded-none w-3/4 mt-8 mr-10">
                    <div className="flex justify-between">
                        <div>
                            <span>Solde d'absence</span> <br />
                            <span className="text-secondary-color text-xl">25,5 </span>
                            <span className="inline-flex items-center">
                                jours
                                <svg className="" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.41495 7.84961L8.49745 10.9321C8.63797 11.0718 8.82806 11.1502 9.0262 11.1502C9.22434 11.1502 9.41443 11.0718 9.55495 10.9321L12.5549 7.93211" stroke="#399AB3" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="bevel" />
                                </svg>
                            </span>
                        </div>

                        <div className="mt-3 px-12">
                            <button className="bg-secondary-color text-white flex items-center px-6 py-1 rounded">
                                <svg className="fill-white pr-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.9999 12H3.99994" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
                                    <path d="M12 20V4" stroke="#FDFDFD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
                                </svg> Faire une demande</button>
                        </div>
                    </div>
                    <table className="min-w-full mt-10" >
                        <thead>
                            <tr className="">
                                <th className="pr-6 text-left">Type de contrat</th>
                                <th className="pr-6 text-left">Statut</th>
                                <th className="pr-10 text-left">Début du contrat</th>
                                <th className="pr-10 text-right">Fin du contrat</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-right">
                                <td className="text-left pr-6">CDI</td>
                                <td className="text-left pr-6">Cadre</td>
                                <td className="text-left pr-6">12/01/2021</td>
                                <td className="text-center">---</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="card rounded-none mt-6 w-1/4">
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
                        <button className="bg-white  px-2 py-2 mt-5 w-full border border-[#399AB3] hover:bg-primary-color hover:text-white rounded" > Mettre à jour</button>
                    </div>
                </div>
            </div>
            <div className="mt-6 card">
                <Calendar />
            </div>
        </div>
    )
}

export default Dashboard;