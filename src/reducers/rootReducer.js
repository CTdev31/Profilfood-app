const initState = {

      id : 0,
      societe : "",
      adresse:"",
      codePostal: "",
      ville:"",
      pays:"",

      contacts: [
        {
          id : 0,
          prenom : "",
          nom : "",
          telephone:"",
          mail:""
        }
      ],

      equipement: [
        {
          id : 0,
          designation : "",
          type : "",
          fonction : "",
          niveauConfidentialite : "Aucun",
          longueur : "",
          hauteur : "",
          profondeur : "",
          masse : "",
          alimentations:[
            {
            id : 0,
            tensionAlim : "",
            typeAlim : "",
            frequenceAlim : "",
            consoAlim : "",
            typeReseau : "",
          },
        ],
        commentaire : ""

        }
      ]
};




const rootReducer = (state = initState, action) =>
{
  if (action.type === "MODIFIER_SOCIETE")
  {
    return{
      ...state,
      [action.nom]:action.value
    };
  }

  if (action.type === "MODIFIER_CONTACT")
  {
    state = action.value;
  }

  if (action.type === "AJOUTER_CONTACT")
  {
    state.contacts.push({
      id : action.nombreContact,
      prenom : "",
      nom : "",
      telephone:"",
      mail:""
  });

    let newcontact = state.contacts.filter(dut => action.nombreContact > -1);
    return{
      ...state,
      contacts:newcontact
    };
  }

  if (action.type === "SUPPRIMER_CONTACT")
  {
    let contactclient = state.contacts;
    contactclient.splice(action.id, 1);

    for(let index=0; index<contactclient.length;index++)
    {
      contactclient[index].id = index
    }
    let newContact = contactclient.filter(alim => alim.id >-1);



    return{
      ...state,
      contacts:newContact
    };
  }


  if (action.type === "MODIFIER_EQUIPEMENT")
  {
    state.equipement = action.value;
  }

  if (action.type === "SUPPRIMER_EQUIPEMENT")
  {
    let newequipement = state.equipement;
    newequipement[action.id].id = -1;
    newequipement = newequipement.filter(dut =>{
      return dut.id > -1;
    });
    const newNewEquipement = newequipement
    for(let index=0; index<newNewEquipement.length;index++)
    {
      newNewEquipement[index].id = index
    }

    return{
      ...state,
      equipement:newNewEquipement
    };
  }

  if (action.type === "AJOUTER_EQUIPEMENT")
  {
    state.equipement.push({
    id : action.id,
      designation : "",
      type : "",
      fonction : "",
      niveauConfidentialite : "Aucun",
      longueur : "",
      hauteur : "",
      profondeur : "",
      masse : "",
      alimentations:[
        {
        id : 0,
        tensionAlim : "",
        typeAlim : "",
        frequenceAlim : "",
        consoAlim : "",
        typeReseau : "",
        commentaire : ""
      }
    ]

  });

    let newequipement = state.equipement.filter(dut =>{
      return action.id > -1;
    });
    return{
      ...state,
      equipement:newequipement
    };
  }

  if (action.type === "AJOUTER_ALIMENTATION")
  {
    state.equipement[action.idEquipement].alimentations.push({
      id : action.nombreAlim,
      tensionAlim : "",
      typeAlim : "",
      frequenceAlim : "",
      consoAlim : "",
      typeReseau : "",
  });

    let newequipement = state.equipement.filter(dut => action.nombreAlim > -1);
    return{
      ...state,
      equipement:newequipement
    };
  }

  if (action.type === "SUPPRIMER_ALIMENTATION")
  {
    let newequipement = state.equipement.filter(dut => action.idEquipement > -1);
    newequipement[action.idEquipement].alimentations[action.id].id = -1;
    let newAlim = newequipement[action.idEquipement].alimentations.filter(alim => alim.id >-1);

    for(let index=0; index<newAlim.length;index++)
    {
      newAlim[index].id = index
    }

    newequipement[action.idEquipement].alimentations = newAlim

    return{
      ...state,
      equipement:newequipement
    };
  }


  return(state);
};
export default rootReducer;
