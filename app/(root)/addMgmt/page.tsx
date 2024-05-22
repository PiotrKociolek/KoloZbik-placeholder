'use client'
import React, { ChangeEvent, useState } from "react";
import Axios from "axios";
import DeerBG from "@/components/DeerBG";
import ZbikNavbar from "@/components/zbikNavbar";

const ManagementForm = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [mgmtRole, setMgmtRole] = useState("");
    const [contact, setContact] = useState("");
    const [photo, setPhoto] = useState<File | null>(null);
    const [error, setError] = useState<string>("");

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSurnameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSurname(e.target.value);
    };

    const handleMgmtRoleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMgmtRole(e.target.value);
    };

    const handleContactChange = (e: ChangeEvent<HTMLInputElement>) => {
        setContact(e.target.value);
    };

    const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPhoto(file);
        }
    };

    const handleAddToManagement = async () => {
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("surname", surname);
            formData.append("mgmtRole", mgmtRole);
            formData.append("contact", contact);
            if (photo) {
                formData.append("photo", photo);
            }

            const response = await Axios.post("http://localhost:8080/api/v1/management/add", formData);
            console.log("Response:", response.data);
            // Tutaj możesz dodać dalsze działania po udanym dodaniu osoby do systemu zarządzania
        } catch (error) {
            console.error("Błąd podczas dodawania osoby do systemu zarządzania:", error);
            // Obsługa błędu
        }
    };

    return (
        <div>
            <ZbikNavbar />
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-md shadow-md relative z-10">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Dodaj osobę do systemu zarządzania</h2>
                    <label className="block mb-4">
                        <span className="text-white">Imię:</span>
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </label>
                    <label className="block mb-4">
                        <span className="text-white">Nazwisko:</span>
                        <input
                            type="text"
                            value={surname}
                            onChange={handleSurnameChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </label>
                    <label className="block mb-4">
                        <span className="text-white">Rola:</span>
                        <input
                            type="text"
                            value={mgmtRole}
                            onChange={handleMgmtRoleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </label>
                    <label className="block mb-4">
                        <span className="text-white">Kontakt:</span>
                        <input
                            type="text"
                            value={contact}
                            onChange={handleContactChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </label>
                    <label className="block mb-4">
                        <span className="text-white">Zdjęcie:</span>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </label>
                    <button
                        onClick={handleAddToManagement}
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                        Dodaj do systemu zarządzania
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManagementForm;
