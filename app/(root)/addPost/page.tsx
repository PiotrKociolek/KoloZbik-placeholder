'use client'
import React, { ChangeEvent, useState } from "react";
import ZbikNavbar from "@/components/zbikNavbar";
import axios from "axios";
import LoginBgImage from "@/components/loginBgImage";

const AddPost = () => {
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const [postMiniature, setPostMiniature] = useState<File | null>(null);
    const [postFiles, setPostFiles] = useState<File[]>([]);

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPostTitle(e.target.value);
    };

    const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPostContent(e.target.value);
    };

    const handleMiniatureChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPostMiniature(file);
        }
    };

    const handleFilesChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newFiles = Array.from(files);
            setPostFiles((prevFiles) => [...prevFiles, ...newFiles]);
        }
    };

    const handleAddPost = async () => {
        const formData = new FormData();
        formData.append("title", postTitle);
        formData.append("content", postContent);
        if (postMiniature) {
            formData.append("miniature", postMiniature);
        }
        postFiles.forEach((file) => {
            formData.append("files", file);
        });

        try {
            const response = await axios.post("http://localhost:8080/api/v1/posts/add", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log("Response:", response.data);
            // Tutaj możesz obsłużyć odpowiedź z serwera, np. wyświetlić komunikat sukcesu
        } catch (error) {
            console.error("Error:", error);
            // Tutaj możesz obsłużyć błędy, np. wyświetlić komunikat o błędzie
        }
    };

    return (
        <div>
            <ZbikNavbar />
            <LoginBgImage />
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-md shadow-md relative z-10">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Dodaj post</h2>
                    <label className="block mb-4">
                        <span className="text-white">Tytuł:</span>
                        <input
                            type="text"
                            value={postTitle}
                            onChange={handleTitleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </label>
                    <label className="block mb-4">
                        <span className="text-white">Treść:</span>
                        <textarea
                            value={postContent}
                            onChange={handleContentChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </label>
                    <label className="block mb-4">
                        <span className="text-white">Miniatura:</span>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleMiniatureChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </label>
                    <label className="block mb-4">
                        <span className="text-white">Załączniki:</span>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleFilesChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </label>
                    <button
                        onClick={handleAddPost}
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                        Dodaj Wpis
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddPost;
