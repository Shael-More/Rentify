import { useOutletContext } from "react-router-dom";

const Price = () => {
  const {price} = useOutletContext()
  return (
    <p>{price}<span>/day</span></p>
  )
}

export default Price