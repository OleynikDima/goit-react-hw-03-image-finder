import axios from 'axios'


const axiosApiWithQuery = (query,pageNumber) => {
  const API_KEY  = '&key=16841256-a77ab01fa9b5f4c89d3e82996'
  const BASE_Url = 'https://pixabay.com/api/'
  const PARAMETRS = `?image_type=photo&orientation=horizontal&q=`
  const PER_PAGE = `&per_page=12`
  const PAGE = `&page=${pageNumber}`

    return  axios
   .get(BASE_Url+PARAMETRS+query+PAGE+PER_PAGE+API_KEY)
   .then(response => response.data.hits)
};
 

export default {
    axiosApiWithQuery,
};