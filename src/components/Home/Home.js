import News from "./News.js";

export default {
components: {News},

    template: `
    <section>
    <div class="banner"><h1>- Bienvenue sur Celtiadur -</h1></div>
  </section>
  <div class="home">
    <section class="intro">
      <h2>Qu’est ce que le site Geriadur ?</h2>
      <h3>Un lexique étymologique</h3>
      <div style="display: flex;
      justify-content: center;">
      <a href="../images/flc.jpg"><img src="../images/flc.jpg" width="400" alt="arbre etymologique des langues celtiques"></a></div>
      <p>
        Geriadur est d’abord un lexique
        etymologique des langues celtiques. Ici nous répéretorions et
        mettons en évidences les éléments linguistiques récurrents présents dans les termes
        d’origine celtique afin d'aboutir à une meilleure compréhension du sens des mots appartenant à cette branche
        linguistique de la grande famille des langues indo-européennes. <br />
        La compréhension des langues celtique ont un intérêt sur plusieurs aspects:<br /></p>
      <div><p><ul margin="25px">
        <li> Son omniprésence dans la toponymie française, une grande part des villes et régions française, belges,
          suisses et des îles brittaniques ont une origine et une signification celtique.
        </li>
        <li> Cerner quels sont les fondements de la culture celtique antique et médiévale au travers de son champs
          lexical réccurrent.
        </li>
        <li> Retrouver le sens profond des mots présents dans les langues celtiques actuelles tel que le breton, le
          gallois ou l'irlandais moderne.
        </li>
      </ul>
    </p></div>
    <a href="/sessionGame"><b><u><h3>Le mini-jeu Gerdarzh</h3></u></b></a>
      <p>Le lexique prend principalement en compte les langues suivantes: le
        breton, l’irlandais, le gallois, le gaulois et le proto-celtique.<br />
        Sur la base de ce lexique, nous proposons un parcours ludique de ces
        termes via le mini-jeu <a href="/sessionGame"><b><u>Gerdarzh</u></b></a>. Le jeu consiste en séries de 15
        noms propres d’origine celtique dont vous devrez trouver leur
        signification étymologique.<br />
        En guise d'aide, une description ainsi qu'une décomposition étymologique vous aidera à trouver la traduction!
      </p>
      <br>
      <br>
      <h2>Dernières fiches de noms propres débloquées :</h2>

      <div class="last-nouns">
        <div class="new-noon">
          <div class="new-noon-img">
            <img src="../images/paris.jpg" width="150" height="150" border-radius="10" alt="Paris">
          </div>
          <div class="new-noon-text">
            <h3>Paris</h3>
            <p>
              <b>Description:</b> "Capitale des Parisii, initialement construite sur la rive gauche de la Seine, puis nommée
              Lutetia ou Loukotokia lors de l'installation romaine",<br>
              <b>Nom gaulois:</b>"Parisios"<br>
              <b>Composition::</b>"kario" (le Chaudron)<br>
              <b>Traduction Littérale:</b> "La ville des Chaudronniers"<br>
            </p>
          </div>
        </div>
      </div>
      <div class="last-nouns">
        <div class="new-noon">
          <div class="new-noon-img">
            <a href="../images/rouen.jpg"><img src="../images/rouen.jpg" width="150" height="150" border-radius="10" alt="Paris"></a>
          </div>
          <div class="new-noon-text">
            <h3>Rouen</h3>
            <p>
              <b>Description:</b> "La ville a été fondée sur la rive droite de la Seine durant le règne d’Auguste.",<br>
              <b>Nom gaulois:</b>"Rotomagos"<br>
              <b>Composition::</b>"roto" (roue / course), "mag"(plaine / marché), "os"(suffixe de lieu)<br>
              <b>Traduction Littérale:</b> "La PLaine de la Course de Char"<br>
            </p>
          </div>
        </div>
      </div>
    </section>
    <news></news>
    </div>
    `,


}