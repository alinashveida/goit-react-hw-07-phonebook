import axios from "axios";

axios.defaults.baseURL =
  "https://611570c58f38520017a384f9.mockapi.io/contacts/";

export async function fetchContacts() {
  const { data } = await axios.get(`/contactsList`);

  console.log(data);
  return data;
}
