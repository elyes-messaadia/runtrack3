function jourtravaille(date) {
    console.log("La fonction jourtravaille est appelée avec la date :", date); // Debug
  
    // Liste des jours fériés en 2020
    const joursFeries2020 = [
      new Date(2020, 0, 1),   // Jour de l'An
      new Date(2020, 3, 13),  // Lundi de Pâques
      new Date(2020, 4, 1),   // Fête du Travail
      new Date(2020, 4, 8),   // Victoire 1945
      new Date(2020, 6, 14),  // Fête Nationale
      new Date(2020, 7, 15),  // Assomption
      new Date(2020, 10, 1),  // Toussaint
      new Date(2020, 10, 11), // Armistice
      new Date(2020, 11, 25)  // Noël
    ];
  
    // Extraire le jour, le mois et l'année
    let jour = date.getDate();
    let mois = date.getMonth() + 1;  // Les mois sont comptés de 0 à 11
    let annee = date.getFullYear();
  
    console.log(`Date à vérifier: ${jour} ${mois} ${annee}`); // Debug
  
    // Vérifier si c'est un week-end
    let jourSemaine = date.getDay();
    if (jourSemaine === 0 || jourSemaine === 6) {
      console.log(`Non, ${jour} ${mois} ${annee} est un week-end`);
      return;
    }
  
    // Vérifier si c'est un jour férié
    for (let i = 0; i < joursFeries2020.length; i++) {
      if (date.getTime() === joursFeries2020[i].getTime()) {
        console.log(`Le ${jour} ${mois} ${annee} est un jour férié`);
        return;
      }
    }
  
    // Sinon, c'est un jour travaillé
    console.log(`Oui, ${jour} ${mois} ${annee} est un jour travaillé`);
  }
  
  // Appel de la fonction avec une date pour tester
  let dateTest = new Date(2020, 4, 1);  // 1er mai 2020 (Fête du Travail)
  jourtravaille(dateTest);
  