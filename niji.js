const axios = require('axios');

class Niji {
  constructor(apiKey = null) {
    this.apiKey = apiKey;
  }

  async Create(prompt, imageUrl = '', aspectRatio = '1:1') {
    if (!prompt) {
      console.error('Please provide a prompt.');
    }
    const apiUrl = `https://project-niji.onrender.com/api/v1/generate?prompt=${encodeURIComponent(prompt)}&aspectRatio=${aspectRatio}&apikey=${this.apiKey}${imageUrl ? `&imageUrl=${encodeURIComponent(imageUrl)}` : ''}`;
    try {
      const response = await axios.post(apiUrl);
      return response.data.url;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = { Niji };
