const  apiKey = "ba-2gOXGo94fiV69t76i3LH4CWoYX02hfTG3nv1ClQPgQhO23LExM_zmayKauT1ydjDv5Io4QLCqghqMK0PF_6CO4RrNGno2v4QKH2jtv8CmBU_smSwRErz3gCDqXnYx"
const Yelp = {

    search(term,location,sortBy)
    {
    console.log("entering search");
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {headers:{ Authorization: `Bearer ${apiKey}`}}).then((response) =>
    {
     console.log(response.ok);
     return response.json();
    }
    )
    .then(jsonResponse => {
    
        //console.log("json response")
        //console.log(jsonResponse);
        //console.log(jsonResponse.businesses)
        if(jsonResponse.businesses)
        {
             return jsonResponse.businesses.map(business =>
                {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipcode: business.location.zip_code,
                    category: business.category,
                    rating: business.rating,
                    reviewcount: business.reviewCount
                   
                    }
                }
             );
        }
    });

    }

}

export default Yelp;