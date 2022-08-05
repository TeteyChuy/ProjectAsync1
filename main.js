const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCWa2jaEyy0qltYfidQ2kR-g&part=snippet%2Cid&order=date&maxResults=10'

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '84d59c8f8cmsh44aa6c93015e369p181911jsn408602a2f0a6',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

  (async () => {
    try {
      const videos =await fetchData(API);
      let view = 
      `${videos.items.map(video=>`      
      <div class="group relative">
        <div
          class="w-full bg-green-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-lg text-green-700">
          <span aria-hidden="true" class="absolute inset-0"></span>
          ${video.snippet.title} <br>
          </h3>
        </div>
        <div class="mt-4 flex justify-between">
          <h4 class="text-lg text-#1438D7-700">
          ${video.snippet.description}
          </h4>
          </div>
      </div> `).slice(2,10).join('')}
      `; 
content.innerHTML = view;
    }
    catch(error){
      console.log(error);
      
    }
  }
  )();
