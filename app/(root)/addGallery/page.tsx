'use client'
import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import ZbikNavbar from "@/components/zbikNavbar";
import LoginBgImage from "@/components/loginBgImage";
import {redirect} from "next/navigation";

const GalleryInput = () => {

    const [title, setTitle] = useState("");
    const [images, setImages] = useState<File[]>([]);
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [added, setAdded] = useState(false);

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newImages = Array.from(files);
            setImages((prevImages) => [...prevImages, ...newImages]);
        }
    };

    const handleThumbnailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setThumbnail(file);
        }
    };

    const handleAddToGallery = async () => {
        const formData = new FormData();
        formData.append("title", title);
        if (thumbnail) {
            formData.append("miniature", thumbnail);
        }
        images.forEach((image) => {
            formData.append("files", image);
        });

        try {
            await axios.post("http://localhost:8080/api/v1/gallery/add", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            setAdded(true);
            // Przekierowanie do "/addGallery" po dodaniu
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <div>
                <div>
                    <ZbikNavbar/>
                </div>
                <LoginBgImage />
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-md shadow-md relative z-10">
                        <h2 className="text-2xl font-semibold mb-4 text-white">Dodaj do galerii</h2>
                        <label className="block mb-4">
                            <span className="text-white">Tytuł:</span>
                            <input
                                type="text"
                                value={title}
                                onChange={handleTitleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        </label>
                        <label className="block mb-4">
                            <span className="text-white">Miniaturka:</span>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleThumbnailChange}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        </label>
                        <label className="block mb-4">
                            <span className="text-white">Zdjęcia:</span>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageChange}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        </label>
                        <a href = "/addGallery">
                        <button
                            onClick={handleAddToGallery}
                            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"

                        >
                            {added ? "Dodano" : "Dodaj do galerii"}
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryInput;
