"use client"

import NewsCard from "@/components/newsCard";
import NewsShort1 from "@/components/newsShort1";
import NewsShort2 from "@/components/newsShort2";
import NewsShort2505 from "@/components/newsshort25.05";

const GridNewsDashboard = () =>{
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            < NewsShort2505/>
            <NewsShort2 />
            <NewsShort1 />
        </div>


    )
}
export default GridNewsDashboard