//document.getElementById("video-click").onclick = function fun() {
    import fetch from 'isomorphic-fetch'

    
    var url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLIC7a_CaE8nWRJzDr2JuVrS21jo4H1n32&key=AIzaSyDo49g75WoT2d1y1WJeJjVa7OxivoGw1aQ";
    var videoIdArray = [];
    var videoUrlArray = [];


    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
        //loop through each item and get its id
        for(var i = 0; i < data.items.length; i++) {
            //store all video id's in array
            videoIdArray.push(data.items[i].snippet.resourceId.videoId);
            //console.log('items in array'+videoIdArray);
        }  
        //build urls
        for(var i = 0; i < videoIdArray.length; i++) {
            //store all video id's in array
            videoUrlArray.push('<iframe width="423" height="238" src="https://www.youtube.com/embed/'+videoIdArray[i]+'"frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        } 
        //console.log('items in  new array '+videoUrlArray);
        //insert each iframe inside the parent container
        for(var i = 0; i < videoUrlArray.length; i++) {
            console.log(videoUrlArray[i]);
            document.getElementById('videos-container').innerHTML += videoUrlArray[i];
        } 

    })
    .catch(err => {
        // Do something for an error here
        console.log('error');
    })

//}