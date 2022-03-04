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
        <div className="w-full pl-[339px] py-[90px] bg-[#F7F8FC]">
            <span className="body-default"> {formatDate(date)}</span> <br />
            <span className="font-title-page pt-[10px]">Bonjour {userName}</span>
            <div className="flex  pt-[13px]">
                <div className="small-shadow bg-white w-3/4  basic-radius">
                    <div className="flex justify-between  mt-[24px] ml-[24px]">
                        <div>
                            <span className="body-default">Solde d'absence</span> <br />
                            <span className="text-secondary-color sd3-default">25,5 </span>
                            <span className="inline-flex items-center caption-default">
                                jours
                                <svg className="" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.41495 7.84961L8.49745 10.9321C8.63797 11.0718 8.82806 11.1502 9.0262 11.1502C9.22434 11.1502 9.41443 11.0718 9.55495 10.9321L12.5549 7.93211" stroke="#399AB3" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="bevel" />
                                </svg>
                            </span>
                        </div>

                        <div className="mt-3 px-12">
                            <button className="bg-secondary-color text-white flex btn-default items-center">
                                <svg className="fill-white ml-5 pr-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.9999 12H3.99994" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
                                    <path d="M12 20V4" stroke="#FDFDFD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
                                </svg> Faire une demande</button>
                        </div>
                    </div>
                    <div className="ml-[24px] mt-[56px] mb-[46px]">
                        <table className="" >
                            <thead>
                                <tr className="sd4-default">
                                    <th> Type de contrat</th>
                                    <th> Statut</th>
                                    <th> Début du contrat</th>
                                    <th> Fin du contrat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="body-default">
                                    <td className="pt-2">CDI</td>
                                    <td >Cadre</td>
                                    <td >12/01/2021</td>
                                    <td >---</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="small-shadow ml-[23px] bg-white w-1/4 mr-[56px] basic-radius">
                    <div className="flex mt-[16px] ml-[16px]">
                        <img src={profil} />
                        <div className="sd4-default text-[#399AB3] pl-[12px]">
                            <span className=""> Cokou Jean-Eude</span> <br />
                            <span className="caption-default text-[#A9A9A9]"> Développeur web</span>
                        </div>
                    </div>
                    <div className="mt-4  mx-[16px]">
                        <span className="text-[#0000000] ord-text">Onboarding</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-warning h-2.5 rounded-full shadow" style={{ width: '50%' }}></div>
                        </div>
                        <button className="bg-white basic-radius   px-2 py-2 mt-5 w-full border border-[#399AB3] hover:bg-primary-color hover:text-white" >
                            Mettre à jour
                        </button>
                    </div>
                    
                </div>
            </div>
             <div className="mt-[32px] mr-[55px] small-shadow">
                <Calendar />
            </div>
        </div>
    )
}

export default Dashboard;