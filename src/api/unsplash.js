import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID o2mONPajVoMOYXVFST-SpJdgOM1csurSpKjOY5ywyI4",
      }
})

