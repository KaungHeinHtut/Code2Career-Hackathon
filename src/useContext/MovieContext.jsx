import React, { createContext, useState, useContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <MovieContext.Provider value={{ selectedMovie, setSelectedMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
