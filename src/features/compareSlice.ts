import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface Car {
    _id: string,
    name: string
}

type RegistrState = {
    areCarsSelected: boolean;
    selectedCars: {
        car1: null,
        car2: null,
    }
}

const initialState: RegistrState = {
    areCarsSelected: false,
    selectedCars: {
        car1: null,
        car2: null,
    }
}