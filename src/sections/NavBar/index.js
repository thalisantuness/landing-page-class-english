import React from "react";
import "./styles.css";
import logo from "../../assets/logo.png"
import img from "../../assets/girl.png"
import book from "../../assets/book.png"


export default function NavBar() {
  return (
<> 
    <div className="navbar">
    <img src={logo} className="logo-img"/> 

    <div className="buttons-container"> 
    
    <button className="button-nav">Sobre</button>
    <button className="button-nav">Cursos</button>
    <button className="button-nav">Plataforma</button>
    <button className="button-nav">Blog</button>

    </div>

    <button className="button-contact">Contato</button>
    
   
    </div>

    <div className="initial-banner">

      <div className="banner-left">

      <h2>Embarque em uma jornada online rumo à fluência
         no inglês!</h2> 
        
        <p>Explore uma didática e ferramentas inovadoras que 
          impulsionarão seu avanço linguístico. Descubra o poder transformador da SpeakUp e abra portas para um futuro brilhante e repleto de oportunidades!</p>
        <button className="button-contact">Contato</button>

        </div>

        <div className="banner-right">
        <img src={img} className="girl" />

        </div>
      </div>
         
      <div> 







 </div>







 <div className= "banner-jornada"> 

<div className="banner-jornada-section-title"> 

<h2>Discover SpeakUp's <br/>  exclusive  advantages</h2> 

</div>


<div className="banner-pai">
  <div className="banner-filho1"> 

<div className="banner-neto">
<img src={book} ></img>
<div className="banner-descricao"> 

<h3>aprendizado personalizado</h3>


<p>aprenda no teu proprio ritmo, com aulas individuais ou em grupo, 
  totalmente online.
</p>

</div>
</div>
</div>

<div className="banner-filho2"> 
<h3>teste</h3>

</div>

<div className="banner-filho3"> 
<h3>teste</h3>

</div>

</div>


</div>








         </>




    
  );







}