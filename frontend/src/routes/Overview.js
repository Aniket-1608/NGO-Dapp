import React from 'react';
const Overview = () => {
  const style = {
    fontSize: "40px",
    fontWeight: "bold",
    textAlign: "center",
  };

  
    return (
      <div>
        <section id="background" className="inn-page-bg">
            <div className="container">
                <div className="row">
                    <div className="inn-pag-ban text-center">
                        <h2 style={style}>Overview</h2>
                        <span className="link text-center">
                            <a href="https://y4d.ngo/home">Home</a> <span> &gt; Overview</span>
                        </span>
                        <div className="sec-title colored" style={{ paddingTop: 15 }}>
                            <span className="decor">
                            <span className="inner" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="com-padd com-padd-redu-bot1 pad-bot-red-40 pt-75">
  <div className="container">
    <div className="row">
      <div
        className="com-title"
        style={{ marginBottom: 20, paddingTop: 15 }}
        id="ld-abour"
      >
        <h2>
          <span className="style-left" />
          Overview
          <span className="style-right" />
        </h2>
      </div>
      <div className="home-list-pop list-spac">
        <div className="list-pg-inn-sp list-360">
          <div className="row">
            <div className="col-md-12 home-list-pop-desc inn-list-pop-desc">
              <p>
              We as a team at Rajiv Gandhi Institute of Technology are studying in our final year.
              Our team  focused its interventions on issues concerning youth and children which brought about significant changes in their lives in terms of education, health, skill, career and sustainable livelihood. Our team also works on Environment conservation, women empowerment, Food safety and security, .
              Being an organisation who cares for society, our team gets engaged in projects as the situation demands under natural or manmade disasters, like COVID-19 Pandemic, Flood, Drought Relief etc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>  
    );
 
  
  
  };
  
  export default Overview;