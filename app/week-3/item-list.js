import Item from "./item";
export default function ItemList(){
    
    const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
      };
       
      const item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
      };
       
      const item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
      };
       
      const item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
      };
       
      const item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
      };
       
      const item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
      };
       
      const item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
      };
       
      const item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
      };
       
      const item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
      };
       
      const item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
      };
       
      const item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
      };
       
      const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
      };
    return(
        <ul className="mt-4">
            {Item(item1.name,item1.quantity,item1.category)}
            {Item(item2.name,item2.quantity,item2.category)}
            {Item(item3.name,item3.quantity,item3.category)}
            {Item(item4.name,item4.quantity,item4.category)}
            {Item(item5.name,item5.quantity,item5.category)}
            {Item(item6.name,item6.quantity,item6.category)}
            {Item(item7.name,item7.quantity,item7.category)}
            {Item(item8.name,item8.quantity,item8.category)}
            {Item(item9.name,item9.quantity,item9.category)}
            {Item(item10.name,item10.quantity,item10.category)}
            {Item(item11.name,item11.quantity,item11.category)}
            {Item(item12.name,item12.quantity,item12.category)}

        </ul>
    );

}