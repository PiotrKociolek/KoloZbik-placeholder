"use client"
import ZbikNavbar from "@/components/zbikNavbar";
import NewsCard from "@/components/newsCard";
import PaginationComponent from "@/components/pagination";
import {Button} from "@nextui-org/react";
import NewsShort from "@/components/newsShort1";
import NewsShort2 from "@/components/newsShort2";
import NewsShort2505 from "@/components/newsshort25.05";

const News = () => {
    return (
        <div className="mx-auto p-4 max-w-screen-xl">
            <ZbikNavbar />



                <Button className="text-green-600 hover:underline mb-4 opacity-0">Dodaj</Button>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
               <NewsShort2505/>
                <NewsShort2/>
                <NewsShort/>

            </div>
            <div className="flex justify-center my-4">
                <PaginationComponent />
            </div>
        </div>




);
};

export default News;