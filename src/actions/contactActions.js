//Je laisse un exemple
export const modifierSociete = (nom, value) =>{
  return{
    type:"MODIFIER_SOCIETE",
    nom,
    value
  };
};
