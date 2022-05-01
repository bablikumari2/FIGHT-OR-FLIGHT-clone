import axios from "axios";

export const ADD_AIRPORT = "ADD_AIRPORT";
export const ADD_AIRPORT_LOADING = "ADD_AIRPORT_LOADING";
export const ADD_AIRPORT_ERROR = "ADD_AIRPORT_ERROR";

export const addAirport = (payload) => ({
    type: ADD_AIRPORT,
    payload
})

export const addAirportLoading = () => ({
    type: ADD_AIRPORT_LOADING
})

export const addAirportError = () => ({
    type: ADD_AIRPORT_ERROR

})


export const getAirportData = () => (dispatch) => {
    dispatch(addAirportLoading())
    fetch("http://localhost:8080/Airports",)
    // fetch('https://flightairportapp.herokuapp.com/airport')
        .then((res) => res.json())
        .then((res) => dispatch(addAirport(res)))
        .catch((err) => dispatch(addAirportError()))
}

export const postAirportData = (airport) => (dispatch) => {
    dispatch(addAirportLoading())
    axios.post("http://localhost:8080/Airports", { airport }).then((res) => dispatch(addAirport(res.data))).catch((err) => dispatch(addAirportError()))
}