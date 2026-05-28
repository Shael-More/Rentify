import { useOutletContext } from "react-router-dom";


const Photos = () => {
  const {imageUrl, name} = useOutletContext();
  return (
    <>
    <img src={imageUrl} alt={`photo of ${name}`} width={200} />
    </>
  )
}

export default Photos