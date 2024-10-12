import ItemList from "./item-list";

export default function Page(){
    return(
        <main className="bg-slate-950 m-2 min-h-screen" >
            <h1 className="text-3xl text-white font-bold">Shopping List</h1>
            <ItemList></ItemList>
        </main>
    );
}