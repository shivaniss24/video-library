import React from 'react'
import { createContext, useContext, useEffect, useReducer } from "react";
import { categories } from '../Data/categories';
import { videos } from '../Data/Videos';
import appReducer from "../Reducer/AppReducer";

const AppContext = createContext();

const Categories_API = "Data/categories";
const initialState = {
    categories: [],
    videos: []
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const getCategories = () => {
        dispatch({ type: "SET_CATEGORIES_DATA", payload: categories });
    }

    const getVideos = () => {
        dispatch({ type: "SET_VIDEOS_DATA", payload: videos });
    }

    useEffect(() => {
        getCategories()
        getVideos()
    }, []);

    return (
        <AppContext.Provider value={{ ...state, categories, videos }}>
            {children}
        </AppContext.Provider>
    );
};

// custom hooks
const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useAppContext };
