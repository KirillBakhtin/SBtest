let object = {
   "ProfileId": "12w562qrx",
   "PersonInfo": {
       "Name": "Василий Иванов",
       "BirthDate": "12-09-1990",
       "Citizenship": "Russian Federation"
   },
   "CardInfo": [
       {
           "CardNumber": "1234890456793333",
           "CardName": "VISA CLASSIC",
           "ExpDate": '30-02-2019',
       },
       {
           "CardNumber": "1234000145292133",
           "CardName": "MASTERCARD GOLD",
           "ExpDate": "21-05-2020"
       },
       {
           "CardNumber": "1234000145293333",
           "CardName": "MIR КЛАССИЧЕСКАЯ",
           "ExpDate": "02-12-2019"
       }
   ]
}

let todaysDate = new Date("12-12-2020");

function getCardsArrayExpDate(json, date) {
  const cardArray = [];

  for (let i = 0; i < json.CardInfo.length; i ++) {
    let dateParts = json.CardInfo[i].ExpDate.split("-");
    let newDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

    if (newDate < date){
      cardArray.push(json.CardInfo[i].CardNumber.slice(12, 16));
    }  
  };
  
  return cardArray.length == 0 ? null : cardArray; 
};

console.log(getCardsArrayExpDate(object, todaysDate));