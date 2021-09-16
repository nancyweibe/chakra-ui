export const filterIt = (array, value, key) => {
  return array.filter(key
    ? a => a[key] === value
    : a => Object.keys(a).some(k => a[k] === value)
  );
}

export const filterItFull = (array, value, key) => {
  return array.filter(key
    ? a => a[key].toLowerCase().indexOf(value.toLowerCase()) !== -1
    : a => Object.keys(a).some(k => a[k].toLowerCase().indexOf(value.toLowerCase()) !== -1)
  );
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function postData(url = '', data = {}) {

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: Array.from(
      data,
      e => e.map(encodeURIComponent).join('=')
    ).join('&')
  });
  return response.json();
}