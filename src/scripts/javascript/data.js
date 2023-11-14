async function request() {
  const response = await fetch("https://zgm.nikkorfed.ru/production");
  return await response.json();
}

export default request();
