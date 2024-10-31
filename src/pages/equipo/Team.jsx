import React, { useState, useEffect } from 'react';
import './Team.css'; // Asegúrate de crear este archivo CSS

export const Team = () => {
  // Estado para almacenar los resultados de las APIs
  const [queryResults, setQueryResults] = useState(null);
  const [chatbotResponse, setChatbotResponse] = useState(null);

  // Función para consultar la API de pokemon
  const fetchQuery = async () => {
    // Aquí irá la lógica para obtener los resultados de la API de pokemon
    
  };

  // Función para consultar la API del chatbot
  const fetchChatbot = async () => {
    // Aquí irá la lógica para obtener la interaccion del chatbot
    
  };

  // useEffect para llamar a las funciones de las APIs al montar el componente
  useEffect(() => {
    fetchChatbot();
  }, []);

  const handleQueryClick = () => {
    fetchQuery();
  };

  return (
  
    <div>
      <h1>Equipo Pokémon</h1>
      
      {/* Contenedor para la consulta de Pokémon */}
      <div className="pokemon-query-container">
        <h2>Resultados de la API de Pokémon</h2>
        <div className="placeholder">
          {queryResults ? (
            <pre>{JSON.stringify(queryResults, null, 2)}</pre>
          ) : (
            <p>Cargando resultados de la API...</p>
          )}
        </div>
        {/* Botón de consulta */}
        <button onClick={handleQueryClick} className="btn btn-primary mt-3">Consultar API Pokémon</button>
      </div>
      
      {/* Cuadro para la respuesta del chatbot */}
      <div className="chatbot-response-container">
        <h2>Respuesta del Chatbot</h2>
        <div className="placeholder">
          {chatbotResponse ? (
            <pre>{JSON.stringify(chatbotResponse, null, 2)}</pre>
          ) : (
            <p>Cargando respuesta del chatbot...</p>
          )}
        </div>
      </div>
    </div>
  );
};
