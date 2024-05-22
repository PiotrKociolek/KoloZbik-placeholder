'use client'
import LoginBgImage from "@/components/loginBgImage";
import {Button, Input} from "@nextui-org/react";

const setPassword = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <LoginBgImage/>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-opacity-75 bg-gray-800 p-6 rounded-lg text-center">
                    <div className="mx-auto max-w-xs">
                        <Input
                            type="password"
                            label="Hasło"
                            description="Podaj nowe hasło"
                        />
                        <Input
                            type="password"
                            label="Powtórz hasło"
                            description="Powtórz nowe hasło"
                            className="mt-4"
                        />
                        <a href="/login">
                            <Button className="mt-4 block">Resetuj Hasło</Button>
                        </a>

                    </div>
                </div>
            </div>
        </div>

    );
};
export default setPassword