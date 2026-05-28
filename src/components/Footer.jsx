const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <p className="footer">&copy; {year} #Rentify</p>
  )
}

export default Footer