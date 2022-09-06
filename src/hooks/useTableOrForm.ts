import { useState } from "react";

export default function useTableOrForm() {
    const [visivel, setVisivel] = useState<'table' | 'form'>('table')

    const exibirTable = () => setVisivel('table');
    const exibirForm = () => setVisivel('form');

    return {
        formuVisivel: visivel === 'form',
        tableVisivel: visivel === 'table',
        exibirTable,
        exibirForm
    }

}
