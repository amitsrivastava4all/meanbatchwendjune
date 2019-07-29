const urls = {
    search(query,limit){
        // let imageurl='http://api.giphy.com/v1/gifs/search?api_key=vFRSFWo6g7vJ7ZAjt3DMDolU52ORTxwH&q='+query+'&limit=5';
        let imageurl=`http://api.giphy.com/v1/gifs/search?api_key=vFRSFWo6g7vJ7ZAjt3DMDolU52ORTxwH&q=${query}&limit=${limit}`;
        return imageurl;
    }
   
}