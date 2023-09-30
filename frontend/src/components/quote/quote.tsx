import { useEffect, useState } from "react";
import quotes from "./quotes";
import Line from "../line";

type QuoteType = {
  id: number;
  quoteEN: string;
  quoteNO: string;
};

export default function Quote({type}: {type: 403 | 404}): JSX.Element {
//   const [randomQuote, setRandomQuote] = useState<QuoteType>(quotes[0]);

//   useEffect(() => {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const selectedQuote = quotes[randomIndex];
//     setRandomQuote(selectedQuote);
//   }, []);
    console.log(type)
    return (
        <div className="grid place-items-center">
            <h1 className="3-xl">{quotes[type][0].quoteEN}</h1>
            <Line height={1} width={quotes[type][0].quoteEN.length*10} />
        </div>
    );
};
