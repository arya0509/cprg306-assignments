export default function Item({name,quantity,category,onSelect}){
    
    return(
        <li className="bg-slate-900 h-auto max-w-sm m-5 p-3 hover:bg-orange-600 " onClick={()=>onSelect(name)}>
            <h2 className="text-xl text-white font-bold ">{name}</h2>
            <div className="text-white text-sm">Buy {quantity} in {category}</div>
        </li>
    );
    
}