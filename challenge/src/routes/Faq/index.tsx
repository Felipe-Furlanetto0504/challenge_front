import { useEffect } from "react";

export default function Faq(){


      useEffect(()=>{
            document.title = "Faq";
        },[])
    return(
        <main>
            <h1>Faq</h1>
        </main>
    );
}