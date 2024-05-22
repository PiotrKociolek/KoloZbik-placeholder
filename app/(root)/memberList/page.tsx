'use client'
import React from 'react';
import ZbikNavbar from "@/components/zbikNavbar";
import LoginBgImage from "@/components/loginBgImage";
import { Image } from "@nextui-org/react";

const MemberList = () => {
    // Przykładowa lista osób w formacie JSON
    const listaOsob = [
        { id: 1, imie: "Jan", nazwisko: "Kowalski" },
        { id: 2, imie: "Anna", nazwisko: "Nowak" },
        { id: 3, imie: "Piotr", nazwisko: "Wiśniewski" },
        { id: 4, imie: "Katarzyna", nazwisko: "Nowak" },
        { id: 5, imie: "Andrzej", nazwisko: "Kowalczyk" },
        { id: 6, imie: "Magdalena", nazwisko: "Wiśniewska" }
    ];

    return (
        <div>
            <ZbikNavbar />
            <LoginBgImage />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-10 flex justify-center items-center">
                <div className="bg-gray-800 p-8 rounded-lg opacity-75 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <h2 className="text-2xl font-bold mb-4 col-span-full">Aktywni Członkowie Koła Łowieckiego Żbik</h2>

                    {listaOsob.map((osoba) => (
                        <div key={osoba.id} className="flex flex-col items-center">
                            <ul>
                                <li className="flex items-center mb-2">
                                    <Image src="./memberIco.png" className="h-6 w-8 mr-2"/>
                                    {osoba.imie} {osoba.nazwisko}
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MemberList;
