import axios from "axios";

export async function fetchRequest(request, page) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const API_KEY = '43347579-3d95162bcb8db799a52fc5fc5';

  const response = await axios.get(`${BASE_URL}${END_POINT}`, {
       params: {
        key: API_KEY,
        q: request,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page,
        per_page: 15
        }
  })
    return response.data;

}