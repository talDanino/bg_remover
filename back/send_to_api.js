
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');



module.exports = async function send_to_api(img_name_path, image_name, color){  //// for access from outside

    const inputPath = img_name_path;
    const formData = new FormData();

    formData.append('size', 'auto');
    formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));
    formData.append('bg_color', color);
    
    await axios({
      method: 'post',
      url: 'https://api.remove.bg/v1.0/removebg',
      data: formData,
      responseType: 'arraybuffer',
      headers: {
        ...formData.getHeaders(),
        'X-Api-Key': 'HARZEaeAtUkLiT3qYAJGXoci',
      },
      encoding: null
    })
    .then((response) => {
      if(response.status != 200) return console.error('Error:', response.status, response.statusText);
      fs.writeFileSync("no_bg_images/"+"no_bg_"+image_name, response.data); //// save result img in our folder
    })
    .catch((error) => {
        return console.error('Request failed:', error);
    });
}


