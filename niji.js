const axios = require('axios');
const Niji = async (prompt, imageUrl = '', aspectRatio = '1:1') => {
  let apiUrl = `https://project-niji.onrender.com/api/v1/generate?prompt=${encodeURIComponent(prompt)}&apikey=rehat`;

  if (imageUrl) {
    apiUrl += `&imageUrl=${encodeURIComponent(imageUrl)}`;
  }

  if (aspectRatio) {
    apiUrl += `&aspectRatio=${encodeURIComponent(aspectRatio)}`;
  }

  try {
    const response = await axios.post(apiUrl);
    let generatedImageUrl = response.data.url;
    return generatedImageUrl;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { Niji };
