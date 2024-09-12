import { useState } from "react";

export const useGetvaleinput = (initialstate) => {
  const [formdata, setformdata] = useState(initialstate);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prew) => ({ ...prew, [name]: value }));
  };
  return { formdata, handleChange, setformdata };
};
