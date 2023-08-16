import React, { useEffect, useState } from "react";

const UsingAPIwHooks = () => {
  // const url = "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f4d24ed4eed3f437a172c7d21502e1b4"
  const url = "https://jsonplaceholder.typicode.com/users";
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      const jresult = await result.json();
      setItems(jresult)
    };
    fetchData();
  }, []);
  return (
    <div>
        {
            items.map((item ) => {
                return <li key={item}>Name : {item.name} | Email: {item.email}</li>
            })
        }
    </div>
  );
};

export default UsingAPIwHooks;
