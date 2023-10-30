const WhatWeDo = () => {
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
                        <h2 style={style}>What We Do</h2>
                        <span className="link text-center">
                            <a href="https://y4d.ngo/home">Home</a> <span> &gt; What we do</span>
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
          What We Do?
          <span className="style-right" />
        </h2>
      </div>
      <div className="home-list-pop list-spac">
        <div className="list-pg-inn-sp list-360">
          <div className="row">
            <div className="col-md-12 home-list-pop-desc inn-list-pop-desc">
              <p>
                We are the proud students of Rajiv Gandhi Institute Of Technology.
                Here our motto is to build  a Blockchain based NGO management Application in which we 
                will collect donations from various organizations , individuals , 
                the society. Our  Through it's various initiatives and
                partnerships working on helping patients who are suffering from very chronic illness.
                Our NGO want to help the poor students who are unable to join higher schools and organization by organizing scholarship events and paying their admission fees.
                Our NGO will provide women empowerment by organizing various events and seminars and giving privelegs to women in getting jobs , or to become poltician .
                Our NGO will provide medical facilities in rural area .
                Our NGO will encourage environment conservation by saving trees , planting samplings
                Our NGO will visit old age homes  and understand their feelings , will gain experience of them. 
                Our NGO will visit orphanage and provide snacks  and books for children .And our motto is to combine Old age homes with orphanage so that children will get experience from elderly people and elderly people will get affection from children.
                Thus we are  building a society better place for living of
                future generation.
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
  
  export default WhatWeDo;
  