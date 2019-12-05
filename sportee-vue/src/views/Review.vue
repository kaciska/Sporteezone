<template>
<div>
	<div class="container">
        <img src="../assets/afit.png" alt="Afit logo" style="width:90px">
        <p><span>Ludmila</span> </p>
        <p>"Skvělé místo na relax dát si pořádně do těla. Vybavení posilovny na jedničku, sprchy by si zasloužili
            častější pořádek. Dobrá lokalita v centru města a možnost využití multisportky."
        </p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
    </div>

    <div class="container">
		<img src="../assets/bluegym.jpg" alt="Blue gym logo" style="width:90px">
        <p><span>Veronika</span> </p>
        <p>"V Blue Gym cvičím několikrát do týdne. Oceňuji především různorodost sálových lekcí a v mém případě výbornou
            dostupnost do centra."</p>
    </div>

    <div class="container">
		<img src="../assets/weissersport.jpg" alt="Weisser sport logo" style="width:90px">
        <p><span>Míša</span> </p>
        <p>"Se sportoviště jsem v dostatečné míře spokojná.Bolo pro mě velmi praktické najít moje oblíbené aktivity na
            jednom místě. Určitě se budu ráda vracet."</p>
    </div>

    <div class="container">
		<img src="../assets/bfit.jpg" alt="Bfit logo" style="width:90px">
        <p><span>Zuzka</span> </p>
        <p>"Je to místo, kde mam rozhodne pocit, že něco dělám! Rozhodně oceňuji prostředí a vřele doporučuji všem,
            který se rozhodli s cvičením."</p>
    </div>
    <div class="container">
        <img src="../assets/myfit.jpg" alt="My Fit logo" style="width:90px">
        <p><span>Anička</span> </p>
        <p>"Krásné a moderní prostory, ve kterých pracuje personál ochotný vždy poradiť.V odpoledních hodinách bývá více
            lidí. fandím a doporučuji i svým přátelům."</p>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container {

    background-color: #eee;
    border-radius: 20px;
    padding: 30px;
    margin: 50px ;
  }

  .container::after {
    content: "";
    clear: both;
    display: table;
  }

  .container img {
    float: left;
    margin-right: 20px;
    border-radius: 60%;
  }
  .checked {
    color: orange;
  }

  .container span {
    font-size: 20px;
    margin-right: 15px;
  }


  @media (max-width: 500px) {
    .container {
        text-align: center;
    }
    .container img {
        margin: auto;
        float: none;
        display: block;
    }
  }

</style>