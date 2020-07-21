const apiKey = 'DJNos-Fd3exul7ik79aqJOHPqFgDwCxO52dMgkhhL1aNlUOHZFCx0k23CRl1hKjQBB_E-Fq5Wdo66s3FVP14fVf6yoLMQ-wUaFe2_maAQkkHvp07tpAngA5wOsSvXnYx';
const cors = 'https://cors-anywhere.herokuapp.com/'
const searchYelpApi = async (term, location, sortBy)=>{
   try {
       

    const response = await fetch(`${cors}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{ headers: {Authorization: `Bearer ${apiKey}`}})
    let modifiedData;
    if(response.ok){
        const jsonResponse = await response.json()
        console.log(jsonResponse)
       
         modifiedData = jsonResponse.businesses.map((business)=>{
           return {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address1: business.location.address1,
                address2: business.location.address2,
                address3: business.location.address3,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.reviewCount,

            }
        })
       
    }
    return modifiedData
       
   } catch (error) {
       console.log(error)
       
   }


}



export default searchYelpApi;

