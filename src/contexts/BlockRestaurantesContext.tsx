import { createContext, useState } from "react";
import restaurantes from '../../restaurantes.json';

interface IRestaurante{
    name:string,
    img:string,
    abre:string,
    fecha:string,
    itens:IItens[],
           
}
interface IItens{

    item:string,
    img:string,
    desc:string,
    valor:number

}

interface IResContext{
    restaurantes:IRestaurante[],
    scenaryRes:boolean,
    resItens:IRestaurante,
    itensPedido:IItens[],
    totPedido:number;
    goToScenary:(go:boolean) => void,
    goToRestaurante:(obj:IRestaurante) => void,
    addItem:(obj:IItens) => void,
    removeItem:(index:number) => void,
}

export const BlockRestauRantesContext = createContext({} as IResContext);

export function BlockRestauRantesProvider( { children, ...rest    }) {

    const [scenaryRes, setScenaryRes] = useState(true);
    const [resItens, setResItens] = useState(undefined);
    const [itensPedido, setItensPedido] = useState([]);
    const [totPedido, setTotPedido] = useState(0);

    function goToScenary(go:boolean){

        setScenaryRes(go);

    }

    function goToRestaurante(obj:IRestaurante){

        setResItens(obj);
        setItensPedido([]);
        setTotPedido(0);
        goToScenary(false); 

    }

    function addItem(obj:IItens){

        const tot = totPedido + obj.valor;
        itensPedido.push(obj);
        setItensPedido(itensPedido);
        setTotPedido(tot);
    }

    function removeItem(index:number){

        if(index === undefined) return;

        const tot = totPedido - itensPedido[index].valor;
        itensPedido.splice(index,1);
        setItensPedido(itensPedido);
        setTotPedido(tot);
    }

   
    return (

        <BlockRestauRantesContext.Provider value={ 
            {
                restaurantes,
                scenaryRes,
                resItens,
                itensPedido,
                totPedido,
                goToScenary,
                goToRestaurante,
                addItem,
                removeItem
            } 
        }>
            {children}
        </BlockRestauRantesContext.Provider>
    );
}