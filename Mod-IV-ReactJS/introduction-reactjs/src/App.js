import React from "react";
import HelloReact from "./components/HelloReact";

const buttonA = <button>Histórico de Clientes</button>;
const buttonB = <button>Cadastrar Cliente</button>;

const hasCustomer = false;
const App = () => {
    const renderShowHistory = () => (
        <div>
            Clique no botão abaixo para visualizar o histórico de Clientes
            <br />
            {buttonA}
        </div>
    );

    const renderRegisterCustomer = () => (
        <div>
            Clique no botão abaixo para cadastrar um novo Cliente
            <br />
            {buttonB}
        </div>
    );
    const customer = "Bruno Carneiro";

    const showCustomer = () => {
        if (!hasCustomer) return null;

        return (
            <div>
                <h1>{customer}</h1>
            </div>
        );
    };

    return (
        <div>
            <HelloReact />
            {hasCustomer ? renderShowHistory() : renderRegisterCustomer()}
            <div>{showCustomer()}</div>
        </div>
    );
};

export default App;
