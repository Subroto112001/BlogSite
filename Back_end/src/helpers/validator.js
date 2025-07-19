exports.validatebody = (req) => {
  
  // validation will be here

  if (req) {
    for (let field in req.body) {
     
      if (req.body[field] === "") {
        return { emptyBody: true, fieldName: field };
      }
    }
   return { emptyBody: false, fieldName: "" };
  } 
};
