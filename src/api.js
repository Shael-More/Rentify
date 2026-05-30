async function getVansData() {
  const res = await fetch(`/api/vans`)
  // if(!res.ok) {
  //   throw {
  //     message: res.message,
  //     statusText:res.statusText,
  //     status: res.status
  //   }
  // }
  const data = await res.json()
  

  return data.vans
}

export default getVansData;