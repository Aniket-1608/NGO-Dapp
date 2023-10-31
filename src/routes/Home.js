import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
export default function Home() {
    const sliderImages = [
        {
            url: "https://files.globalgiving.org/pfil/26802/pict_featured_jumbo.jpg?t=1620052055000"
        },
        {
            url: "https://th.bing.com/th/id/R.1ff4bbe597a13a3006516b8666fac99c?rik=2XxlKvUUA8Bq1w&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1097417%2fimages%2fo-EMPOWERING-GIRLS-POVERTY-facebook.jpg&ehk=%2byPv%2f8fRz4zkYhHYmt8CzUV%2fsc48yGTGPGGW%2ftkfpLU%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            url: "https://healthnewsreporting.com/wp-content/uploads/2019/03/Indian-Government-Schemes-For-Womens.jpg"
        },
        {
            url: "https://2.bp.blogspot.com/-MCbuFdl1j1U/W_e53Yu42ZI/AAAAAAAAemM/YkHoFAFVQfwNTGBFaCwUzHElXIerDBLsgCLcBGAs/s1600/old-age.jpg"
        }, {
            url: "https://ilm-live.storage.googleapis.com/upload/img_cache/file-1464-1e1ce03c930c2119b08c3c8647d31c74.jpg"
        }, {
            url: "https://th.bing.com/th/id/R.5d7e857db2e1136d3819e0736aba5446?rik=vlagv3OmvU9BKg&riu=http%3a%2f%2fmedia3.s-nbcnews.com%2fi%2fMSNBC%2fComponents%2fSlideshows%2f_production%2fss-140907-india-kashmir-flooding%2fss-140907-india-kashmir-flooding-16.jpg&ehk=95b4BS9kC8QHYuMYrZqmA3vQU6xqsimaGnrUfpAjhME%3d&risl=1&pid=ImgRaw&r=0"
        }, {
            url: "https://rockwell.co.in/wp-content/uploads/2019/10/download.jpeg"
        },
    ];
    
    
    return (
        <div 
        style={{display:"flex",justifyContent:"center",alignItems:"center"}}
        >
            <div style={{margin:10}}>
            <SimpleImageSlider width={800}
                height={500}
                images={sliderImages}
                slideDuration={3}
                loop={true}
                autoPlay={true}
                showNavs={true}/>

            </div>
            
            <div className="what" >
                <div className="con">
                    <h1>What We Do</h1>
                    <p>We as a team at Rajiv Gandhi Institute of Technology are studying in our final year. Our team focused its interventions on issues concerning youth and children which brought about significant changes in their lives in terms of education, health, skill, career and sustainable livelihood. Our team also works on Environment conservation, women empowerment, Food safety and security, . Being an organisation who cares for society, our team gets engaged in projects as the situation demands under natural or manmade disasters, like COVID-19 Pandemic, Flood, Drought Relief etc social media.</p>
                    <button><i className="fa-solid fa-heart" style={{color:'#ffff'}}></i>Yes! I want to help
                    </button>
                </div>

                <div className="wedo">
                    <img src="https://www.educategirls.ngo/wp-content/themes/egindia/static/images/img-1.jpg"/>
                </div>
            </div>
            

        </div>
    );
}
