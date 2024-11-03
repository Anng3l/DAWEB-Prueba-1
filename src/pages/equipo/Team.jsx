import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai'; // Importación de librería
import './Team.css'; // Asegúrate de crear este archivo CSS

export const Team = () => {
  // Estado para almacenar los resultados de las APIs
  const [queryResults, setQueryResults] = useState(null);
  const [chatbotResponse, setChatbotResponse] = useState(null);
  const [inputText, setInputText] = useState(''); // Para almacenar el texto de entrada

  const API_KEY = 'AIzaSyAnBUSyOoagyXBaqkhiTGPg7CcQ0BYeG4k';
  const genAI = new GoogleGenerativeAI(API_KEY);

    // useEffect para llamar a las funciones de las APIs al montar el componente
    useEffect(() => {
    
    }, []);

  // Función para consultar la API de Google Gemini
  const fetchChatbot = async () => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
      const result = await model.generateContent(inputText);
      const responseText = await result.response.text(); // Corregido para obtener el texto
      setChatbotResponse(responseText);
    } catch (error) {
      if (error.message.includes("429")) {
        console.log("Se alcanzó el límite de solicitudes. Inténtalo más tarde.");
      } else {
        console.log("Error al generar el contenido", error);
      }
    }
  };

  // Manejo para el cambio de Input
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };



  return (
    <div>
      <h1>Equipo Pokémon</h1>

      <input 
        type="text"
        placeholder='Escribe algo aquí'
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={fetchChatbot} className='btn btn-danger mt-3'>Generar Respuesta de Gemini</button> 
      
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
        <button className="btn btn-primary mt-3">Consultar API Pokémon</button>
      </div>
      
      {/* Cuadro para la respuesta del chatbot */}
      <div className="chatbot-response-container">
        <h2>Respuesta del Chatbot</h2>
        <div className="placeholder">
          {chatbotResponse ? (
            <p>{chatbotResponse}</p> // Corregido para mostrar el texto de la respuesta
          ) : (
            <p>Cargando respuesta del chatbot...</p>
          )}
        </div>
      </div>
    </div>
  );
};
