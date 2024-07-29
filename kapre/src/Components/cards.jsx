export const Cards = () => {
    return (
        <>
        <div className="mariabslider" style={{ height:"50%"}} >
            <div className="d-md-flex flex-md-equal" >
                    <div  style={{ margin:"5px",
                            height: '100%',
                        }}
                    > <img src="/man.webp"></img>
                    <center><p style={{ marginTop:"15px",}} className="lead">Menswear</p></center>
               </div>
               <div  style={{  margin:"5px",
                            height: '100%', }}
                    > <img src="/daddy.webp"></img>
                   <center> <p  style={{ marginTop:"15px",}} className="lead">Dad & Me</p></center>
               </div>
                     
               
               </div>
                </div>
              
                <img src="kidswear.webp"  style={{ padding:" 20px 35px 10px 35px" }} class="img-fluid" alt="..." />
                <center> <p className="lead">Kids Wear</p></center>
                <div className="mariabslider" style={{ height:"50%"}} >
                <div className="d-md-flex flex-md-equal" >
                        <div  style={{ margin:"5px",
                                height: '100%',
                            }}
                        > <img src="/mariab1.webp"></img>
                        <center><p style={{ marginTop:"15px",}} className="lead">Unstitched</p></center>
                   </div>
                   <div  style={{  margin:"5px",
                                height: '100%', }}
                        > <img src="/mariab2.webp"></img>
                       <center> <p  style={{ marginTop:"15px",}} className="lead">Ready To Wear</p></center>
                   </div>
                         
                   
                   </div>
                    </div>
        </>
    );
};
