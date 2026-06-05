export async function getVansData(id) {
  const fetchUrl = id ? `/api/vans/${id}` : `/api/vans`;
  const res = await fetch(fetchUrl);
  if (!res.ok) {
    throw {
      message: 'Failed to fetch vans',
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function getHostVans(id) {
  const fetchUrl = id ? `/api/host/vans/${id}` : '/api/host/vans';
  const res = await fetch(fetchUrl);
  if (!res.ok) {
    throw {
      message: 'Failed to fetch vans',
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function loginUser(creds) {
  const res = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify(creds),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  // const text = await res.text();

  // const data = JSON.parse(text);


  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}
