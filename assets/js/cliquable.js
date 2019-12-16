/**
 * @author Serhat
 */

var bouton_férié = document.getElementsByClassName("férié");
var all = document.getElementByClassName("j");
var ephemeride; /*
ephemeride[1][1] = 'Jour de l\'an';
ephemeride[1][2] = 'Ste Ella';
ephemeride[1][3] = 'St Aubin';
ephemeride[1][4] = 'St Hugues';
ephemeride[1][5] = 'St Jeremie';
ephemeride[1][6] = 'St Justin';
ephemeride[1][7] = 'St Thierry';
ephemeride[1][8] = 'St Alphonse';
ephemeride[1][9] = 'St Gilles';
ephemeride[1][10] = 'Ste Thérèse';
ephemeride[1][11] = 'Toussaint';
ephemeride[1][12] = 'Ste Florence';
ephemeride[2][1] = 'St Basile';
ephemeride[2][2] = 'St Théophane';
ephemeride[2][3] = 'St Jaouen';
ephemeride[2][4] = 'Ste Sandrine';
ephemeride[2][5] = 'St Boris';
ephemeride[2][6] = 'Ste Blandine';
ephemeride[2][7] = 'St Martinien';
ephemeride[2][8] = 'St Julien';
ephemeride[2][9] = 'Ste Ingrid';
ephemeride[2][10] = 'St Léger';
ephemeride[2][11] = 'Défunts';
ephemeride[2][12] = 'Ste Viviane';
ephemeride[3][1] = 'Ste Geneviève';
ephemeride[3][2] = 'St Blaise';
ephemeride[3][3] = 'St Gwénola';
ephemeride[3][4] = 'St Richard';
ephemeride[3][5] = 'St Philippe';
ephemeride[3][6] = 'St Kevin';
ephemeride[3][7] = 'St Thomas';
ephemeride[3][8] = 'Ste Lydie';
ephemeride[3][9] = 'St Grégoire';
ephemeride[3][10] = 'St Gérard';
ephemeride[3][11] = 'St Hubert';
ephemeride[3][12] = 'St Xavier';
ephemeride[4][1] = 'St Odilon';
ephemeride[4][2] = 'Ste Véronique';
ephemeride[4][3] = 'St Casimir';
ephemeride[4][4] = 'St Isidore';
ephemeride[4][5] = 'St Sylvain';
ephemeride[4][6] = 'Ste Clotilde';
ephemeride[4][7] = 'St Florent';
ephemeride[4][8] = 'St Jean-Marie';
ephemeride[4][9] = 'Ste Rosalie';
ephemeride[4][10] = 'St François';
ephemeride[4][11] = 'St Charles';*/
ephemeride[4][12] = "Ste Barbara";
ephemeride[5][1] = "St Edouard";
ephemeride[5][2] = "Ste Agathe";
ephemeride[5][3] = "St Olive";
ephemeride[5][4] = "Ste Irène";
ephemeride[5][5] = "Ste Judith";
ephemeride[5][6] = "St Igor";
ephemeride[5][7] = "St Antoine";
ephemeride[5][8] = "St Abel";
ephemeride[5][9] = "Ste Raïssa";
ephemeride[5][10] = "Ste Fleur";
ephemeride[5][11] = "Ste Sylvie";
ephemeride[5][12] = "St Gérald";
ephemeride[6][1] = "Ste Mélaine";
ephemeride[6][2] = "St Gaston";
ephemeride[6][3] = "Ste Colette";
ephemeride[6][4] = "St Marcellin";
ephemeride[6][5] = "Ste Prudence";
ephemeride[6][6] = "St Norbert";
ephemeride[6][7] = "Ste Mariette";
ephemeride[6][8] = "St Octavien";
ephemeride[6][9] = "St Bertrand";
ephemeride[6][10] = "St Bruno";
ephemeride[6][11] = "Ste Bertille";
ephemeride[6][12] = "St Nicolas";
ephemeride[7][1] = "St Raymond";
ephemeride[7][2] = "Ste Eugénie";
ephemeride[7][3] = "Ste Félicité";
ephemeride[7][4] = "St Jean-Baptiste";
ephemeride[7][5] = "Ste Gisèle";
ephemeride[7][6] = "St Gilbert";
ephemeride[7][7] = "St Eliane";
ephemeride[7][8] = "St Gaétan";
ephemeride[7][9] = "Ste Reine";
ephemeride[7][10] = "St Serge";
ephemeride[7][11] = "Ste Carine";
ephemeride[7][12] = "St Ambroise";
ephemeride[8][1] = "St Lucien";
ephemeride[8][2] = "Ste Jacqueline";
ephemeride[8][3] = "St Jean de Dieu";
ephemeride[8][4] = "Ste Julie";
ephemeride[8][5] = "St Désiré";
ephemeride[8][6] = "St Médard";
ephemeride[8][7] = "St Thibaud";
ephemeride[8][8] = "St Dominique";
ephemeride[8][9] = "St Adrien";
ephemeride[8][10] = "Ste Pélagie";
ephemeride[8][11] = "St Geoffroy";
ephemeride[8][12] = "Ste Frida";
ephemeride[9][1] = "Ste Alix";
ephemeride[9][2] = "Ste Apolline";
ephemeride[9][3] = "Ste Françoise";
ephemeride[9][4] = "St Gautier";
ephemeride[9][5] = "Ste Pacôme";
ephemeride[9][6] = "Ste Diane";
ephemeride[9][7] = "Ste Amandine";
ephemeride[9][8] = "St Amour";
ephemeride[9][9] = "St Alain";
ephemeride[9][10] = "St Denis";
ephemeride[9][11] = "St Théodore";
ephemeride[9][12] = "St Pierre Fourier";
ephemeride[10][1] = "St Guillaume";
ephemeride[10][2] = "St Arnaud";
ephemeride[10][3] = "St Vivien";
ephemeride[10][4] = "St Fulbert";
ephemeride[10][5] = "Ste Solange";
ephemeride[10][6] = "Ste Trinité";
ephemeride[10][7] = "St Ulric";
ephemeride[10][8] = "St Laurent";
ephemeride[10][9] = "Ste Inès";
ephemeride[10][10] = "St Ghislain";
ephemeride[10][11] = "St Léon";
ephemeride[10][12] = "St Romaric";
ephemeride[11][1] = "St Paulin";
ephemeride[11][2] = "ND de Lourdes";
ephemeride[11][3] = "Ste Rosine";
ephemeride[11][4] = "St Stanislas";
ephemeride[11][5] = "Ste Estelle";
ephemeride[11][6] = "St Barnabé";
ephemeride[11][7] = "St Benoît";
ephemeride[11][8] = "Ste Claire";
ephemeride[11][9] = "St Adelphe";
ephemeride[11][10] = "St Firmin";
ephemeride[11][11] = "St Martin";
ephemeride[11][12] = "St Daniel";
ephemeride[12][1] = "Ste Tatiana";
ephemeride[12][2] = "St Félix";
ephemeride[12][3] = "Ste Justine";
ephemeride[12][4] = "St Jules";
ephemeride[12][5] = "St Achille";
ephemeride[12][6] = "St Guy";
ephemeride[12][7] = "St Olivier";
ephemeride[12][8] = "Ste Clarisse";
ephemeride[12][9] = "St Apollinaire";
ephemeride[12][10] = "St Wilfrid";
ephemeride[12][11] = "St Christian";
ephemeride[12][12] = "Ste Chantal";
ephemeride[13][1] = "Ste Yvette";
ephemeride[13][2] = "Ste Béatrice";
ephemeride[13][3] = "St Rodrigue";
ephemeride[13][4] = "Ste Ida";
ephemeride[13][5] = "Ste Rolande";
ephemeride[13][6] = "St Antoine";
ephemeride[13][7] = "St Henri][St Joël";
ephemeride[13][8] = "St Hippolyte";
ephemeride[13][9] = "St Aimé";
ephemeride[13][10] = "St Géraud";
ephemeride[13][11] = "St Brice";
ephemeride[13][12] = "St Lucie";
ephemeride[14][1] = "Ste Nina";
ephemeride[14][2] = "St Valentin";
ephemeride[14][3] = "Ste Mathilde";
ephemeride[14][4] = "St Maxime";
ephemeride[14][5] = "St Matthias";
ephemeride[14][6] = "St Elisée";
ephemeride[14][7] = "St Camille][Fête Nationale";
ephemeride[14][8] = "St Evrard";
ephemeride[14][9] = "St Materne";
ephemeride[14][10] = "St Juste";
ephemeride[14][11] = "St Sidoine";
ephemeride[14][12] = "Ste Odile";
ephemeride[15][1] = "St Rémi";
ephemeride[15][2] = "St Claude";
ephemeride[15][3] = "Ste Louise";
ephemeride[15][4] = "St Paterne";
ephemeride[15][5] = "Ste Denise";
ephemeride[15][6] = "Ste Germaine";
ephemeride[15][7] = "St Donald";
ephemeride[15][8] = "Ste Marie][Assomption";
ephemeride[15][9] = "St Roland";
ephemeride[15][10] = "Ste Thérèse";
ephemeride[15][11] = "St Albert";
ephemeride[15][12] = "Ste Ninon";
ephemeride[16][1] = "St Marcel";
ephemeride[16][2] = "Ste Julienne";
ephemeride[16][3] = "Ste Bénédicte";
ephemeride[16][4] = "St Benoît-Joseph";
ephemeride[16][5] = "St Honoré";
ephemeride[16][6] = "St Régis";
ephemeride[16][7] = "Ste Carmen";
ephemeride[16][8] = "St Armel";
ephemeride[16][9] = "Ste Edith";
ephemeride[16][10] = "Ste Edwige";
ephemeride[16][11] = "Ste Marguerite";
ephemeride[16][12] = "Ste Alice";
ephemeride[17][1] = "Ste Roseline";
ephemeride[17][2] = "St Alexis";
ephemeride[17][3] = "St Patrick";
ephemeride[17][4] = "St Anicet";
ephemeride[17][5] = "St Pascal";
ephemeride[17][6] = "St Hervé";
ephemeride[17][7] = "Ste Charlotte";
ephemeride[17][8] = "St Hyacinthe";
ephemeride[17][9] = "St Renaud";
ephemeride[17][10] = "St Baudouin";
ephemeride[17][11] = "Ste Elisabeth";
ephemeride[17][12] = "St Gaël";
ephemeride[18][1] = "Ste Prisca";
ephemeride[18][2] = "Ste Bernadette";
ephemeride[18][3] = "St Cyrille";
ephemeride[18][4] = "St Parfait";
ephemeride[18][5] = "St Eric";
ephemeride[18][6] = "St Léonce";
ephemeride[18][7] = "St Frédéric";
ephemeride[18][8] = "Ste Hélène";
ephemeride[18][9] = "Ste Nadège";
ephemeride[18][10] = "St Luc";
ephemeride[18][11] = "Ste Aude";
ephemeride[18][12] = "St Gatien";
ephemeride[19][1] = "St Marius";
ephemeride[19][2] = "St Gabin";
ephemeride[19][3] = "St Joseph";
ephemeride[19][4] = "Ste Emma";
ephemeride[19][5] = "St Yves";
ephemeride[19][6] = "St Romuald";
ephemeride[19][7] = "St Arsène";
ephemeride[19][8] = "St Jean-Eudes";
ephemeride[19][9] = "Ste Emilie";
ephemeride[19][10] = "St René Goupil";
ephemeride[19][11] = "St Tanguy";
ephemeride[19][12] = "St Urbain";
ephemeride[20][1] = "St Sébastien";
ephemeride[20][2] = "Ste Aimée";
ephemeride[20][3] = "St Herbert";
ephemeride[20][4] = "Ste Odette";
ephemeride[20][5] = "St Bernardin";
ephemeride[20][6] = "St Silvère";
ephemeride[20][7] = "Ste Marina";
ephemeride[20][8] = "St Bernard";
ephemeride[20][9] = "St Davy";
ephemeride[20][10] = "Ste Adeline";
ephemeride[20][11] = "St Edmond";
ephemeride[20][12] = "St Théophile";
ephemeride[21][1] = "Ste Agnès";
ephemeride[21][2] = "St Damien";
ephemeride[21][3] = "Ste Clémence";
ephemeride[21][4] = "St Anselme";
ephemeride[21][5] = "St Constantin";
ephemeride[21][6] = "St Rodolphe";
ephemeride[21][7] = "St Victor";
ephemeride[21][8] = "St Christophe";
ephemeride[21][9] = "St Matthieu";
ephemeride[21][10] = "Ste Céline";
ephemeride[21][11] = "Présentation de Marie";
ephemeride[21][12] = "St Pierre Canisius";
ephemeride[22][1] = "St Vincent";
ephemeride[22][2] = "Ste Isabelle";
ephemeride[22][3] = "Ste Léa";
ephemeride[22][4] = "St Alexandre";
ephemeride[22][5] = "St Emile";
ephemeride[22][6] = "St Alban";
ephemeride[22][7] = "Ste Marie-Madeleine";
ephemeride[22][8] = "St Fabrice";
ephemeride[22][9] = "St Maurice";
ephemeride[22][10] = "Ste Elodie";
ephemeride[22][11] = "Ste Cécile";
ephemeride[22][12] = "Ste Françoise-Xavière";
ephemeride[23][1] = "St Barnard";
ephemeride[23][2] = "St Lazare";
ephemeride[23][3] = "St Victorien";
ephemeride[23][4] = "St Georges";
ephemeride[23][5] = "St Didier";
ephemeride[23][6] = "Ste Audrey";
ephemeride[23][7] = "Ste Brigitte";
ephemeride[23][8] = "Ste Rose";
ephemeride[23][9] = "St Constant";
ephemeride[23][10] = "St Jean de Capistran";
ephemeride[23][11] = "St Clément";
ephemeride[23][12] = "St Armand";
ephemeride[24][1] = "St François de Sales";
ephemeride[24][2] = "St Modeste";
ephemeride[24][3] = "Ste Karine";
ephemeride[24][4] = "St Fidèle";
ephemeride[24][5] = "St Donatien";
ephemeride[24][6] = "St Yann";
ephemeride[24][7] = "Ste Christine";
ephemeride[24][8] = "St Barthélémy";
ephemeride[24][9] = "Ste Thècle";
ephemeride[24][10] = "St Florentin";
ephemeride[24][11] = "Ste Flora";
ephemeride[24][12] = "Ste Adèle";
ephemeride[25][1] = "St Apollos";
ephemeride[25][2] = "St Roméo";
ephemeride[25][3] = "Annonciation";
ephemeride[25][4] = "St Marc";
ephemeride[25][5] = "Ste Sophie";
ephemeride[25][6] = "St Prosper";
ephemeride[25][7] = "St Jacques";
ephemeride[25][8] = "St Louis";
ephemeride[25][9] = "St Hermann";
ephemeride[25][10] = "St Crépin";
ephemeride[25][11] = "Ste Catherine";
ephemeride[25][12] = "Noël";
ephemeride[26][1] = "Ste Paule";
ephemeride[26][2] = "St Nestor";
ephemeride[26][3] = "Ste Lara";
ephemeride[26][4] = "Ste Alida";
ephemeride[26][5] = "St Bérenger";
ephemeride[26][6] = "St Anthelme";
ephemeride[26][7] = "Ste Anne";
ephemeride[26][8] = "Ste Natacha";
ephemeride[26][9] = "St Côme][St Damien";
ephemeride[26][10] = "St Dimitri";
ephemeride[26][11] = "Ste Delphine";
ephemeride[26][12] = "St Etienne";
ephemeride[27][1] = "Ste Angèle";
ephemeride[27][2] = "Ste Honorine";
ephemeride[27][3] = "St Habib";
ephemeride[27][4] = "Ste Zita";
ephemeride[27][5] = "St Augustin";
ephemeride[27][6] = "St Fernand";
ephemeride[27][7] = "Ste Nathalie";
ephemeride[27][8] = "Ste Monique";
ephemeride[27][9] = "St Vincent de Paul";
ephemeride[27][10] = "Ste Emeline";
ephemeride[27][11] = "St Séverin";
ephemeride[27][12] = "St Jean";
ephemeride[28][1] = "St Thomas d'Aquin";
ephemeride[28][2] = "St Romain";
ephemeride[28][3] = "St Gontran";
ephemeride[28][4] = "Ste Valérie";
ephemeride[28][5] = "St Germain";
ephemeride[28][6] = "St Irénée";
ephemeride[28][7] = "St Samson";
ephemeride[28][8] = "St Augustin";
ephemeride[28][9] = "St Venceslas";
ephemeride[28][10] = "St Simon";
ephemeride[28][11] = "St Jacques de la Marche";
ephemeride[28][12] = "St Gaspard";
ephemeride[29][1] = "St Gildas";
ephemeride[29][2] = "St Auguste";
ephemeride[29][3] = "Ste Gwladys";
ephemeride[29][4] = "Ste Catherine";
ephemeride[29][5] = "St Aymard";
ephemeride[29][6] = "St Pierre][St Paul";
ephemeride[29][7] = "Ste Marthe";
ephemeride[29][8] = "Ste Sabine";
ephemeride[29][9] = "Sts Michel";
ephemeride[29][10] = "St Narcisse";
ephemeride[29][11] = "St Saturnin";
ephemeride[29][12] = "St David";
ephemeride[30][1] = "Ste Martine";
ephemeride[30][3] = "St Amédée";
ephemeride[30][4] = "St Robert";
ephemeride[30][5] = "St Ferdinand";
ephemeride[30][6] = "St Martial";
ephemeride[30][7] = "Ste Juliette";
ephemeride[30][8] = "St Fiacre";
ephemeride[30][9] = "St Jérôme";
ephemeride[30][10] = "Ste Bienvenue";
ephemeride[30][11] = "St André";
ephemeride[30][12] = "St Roger";
ephemeride[31][1] = "Ste Marcelle";
ephemeride[31][3] = "St Benjamin";
ephemeride[31][5] = "Ste Perrette";
ephemeride[31][7] = "St Ignace";
ephemeride[31][8] = "St Aristide";
ephemeride[31][10] = "St Quentin";
ephemeride[31][12] = "St Sylvestre";
var ferie = false;

var date = all.getElementByName("date");
var jour = getDate(date);
var mois = getMonth(date);

for (var index = 0; i < ephemeride.length; i++) {
  if (ephemeride[jour][mois] != NULL) {
    alert(ephemeride[jour][mois]);
  }
}

if (ferie) {
  for (var i = 0; i < bouton_férié.length; i++) {
    switch (bouton_férié.id) {
      case "JourAn":
        alert("jour de l'an");
        break;
      case "Paques":
        alert("Paques");
        break;
      case "LundiPaques":
        alert("Lundi de paques");
        break;
      case "FTravail":
        alert("Fête du travail");
        break;
      case "Armistice":
        alert("Armistice 1945");
        break;
      case "Ascension":
        alert("Fête de l'ascension");
        break;
      case "Pentecote":
        alert(" Lundi de Pentecôte");
        break;
      case "National":
        alert("Fête national");
        break;
      case "assomption":
        alert("Assomption");
        break;
      case "Armistice":
        alert("Armistice 1918");
        break;
      case "Noel":
        alert("Noël");
        break;
    }
  }
  ferie = false;
}

/* test plus haut
bouton_férié.addEventListener("click",function()
{
    ferie = true;
});

all.addEventListener("click",function(){

    var date = all.getElementByName('date');
    var jour = getDate(date);
    var mois = getMonth(date);

    for(var index = 0; i < ephemeride.length; i++)
    {
        if(ephemeride[jour][mois] != NULL)
        {
            alert (ephemeride[jour][mois]);
        }
    }
    
    if(ferie)
    {
        for (var i=0; i < bouton_férié.length; i++)
        {
            switch(bouton_férié.id)
            {
                case "JourAn" : alert("jour de l'an"); break;
                case "Paques" : alert("Paques");break;
                case "LundiPaques" : alert("Lundi de paques");break;
                case "FTravail" : alert("Fête du travail");break;
                case "Armistice" : alert("Armistice 1945");break;
                case "Ascension" : alert("Fête de l'ascension");break;
                case "Pentecote" : alert(" Lundi de Pentecôte");break;
                case "National" : alert("Fête national");break;
                case "assomption" : alert("Assomption");break;
                case "Armistice" : alert("Armistice 1918");break;
                case "Noel" : alert("Noël");break;
            }
        }
        ferie = false;
    }
});*/
