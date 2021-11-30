import React from 'react';
import './App.css';

function LuzVerde(){
    return(
        <div className="LuzVerde"></div>
    )
}

function LuzAmarilla(){
    return(
        <div className="LuzAmarilla"></div>
    )
}

function LuzRoja(){
    return(
        <div className="LuzRoja"></div>
    )
}

function Rectangulo(){
    return(
        <div className="Rectangulo"></div>
    )
}

function TapaRoja(){
    return(
        <div className="TapaRoja"></div>
    )
}

function TapaAmarilla(){
    return(
        <div className="TapaAmarilla"></div>
    )
}

function TapaVerde(){
    return(
        <div className="TapaVerde"></div>
    )
}

function App(){
    return(
        <div className="app">
            <h1 className="titulo"> Exercise | One </h1>
            <Rectangulo />
            <LuzVerde />
            <LuzAmarilla />
            <LuzRoja />
            <TapaRoja />
            <TapaAmarilla />
            <TapaVerde />
            <button className="botonWait">Wait</button>
            <button className="botonStop">Stop</button>
            <button className="botonGo">Go</button>
        </div>
    )
}

export default App;